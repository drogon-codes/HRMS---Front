import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewDepartments(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        // debugger;  
        Axios  
            .get(process.env.REACT_APP_API+"DepartmentAPI")  
            .then(result => setData(result.data));  
        // debugger;  
    } );

    const deleteDepartment = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"DepartmentAPI/" + id).then(navigate("/ViewDepartments"));  
    };

    const editDepartment = (id) => {  
        navigate("/UpdateDepartment/"+id);  
    }; 
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Departments</title>
                </Helmet>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Header/>
            <Sidebar/>
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">View Departments</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Departments</a></li>
                                            <li className="breadcrumb-item active">View Departments</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Departments</h4>
                                        <div class="text-right">
                                            <Link to="/AddDepartment" class="btn btn-dark waves-effect waves-light">Add Department</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Department Name</th>
                                                <th>City</th>
                                                <th>Address</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                return <tr key={item.departmentId}>
                                                    <td>{++i}</td>
                                                    <td>{item.departmentName}</td>
                                                    <td>{item.cityName}</td>
                                                    <td>{item.departmentAddress}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => { editDepartment(item.departmentId) }}>Edit</button>&emsp;
                                                        <button type="button" class="btn btn-outline-danger btn btn-sm  waves-effect waves-light" onClick={() => { deleteDepartment(item.departmentId) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © Skote.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right d-none d-sm-block">
                                    Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>  
        </div>
    );
}

export default ViewDepartments;