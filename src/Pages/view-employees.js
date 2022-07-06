import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewEmployees(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        // debugger;  
        Axios  
            .get(process.env.REACT_APP_API+"EmployeeAPI")  
            .then(result => setData(result.data));  
        // debugger;  
    } );
    const deleteEmployee = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"EmployeeAPI/" + id).then(navigate("/ViewEmployees"));  
    };

    const editEmployee = (id) => {  
        navigate("/UpdateEmployee/"+id);  
    };

    const employeeDetails = (id) => {  
        navigate("/EmployeeDetails/"+id);  
    };    
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Employees</title>
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
                                    <h4 className="mb-0 font-size-18">View Employees</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Employees</a></li>
                                            <li className="breadcrumb-item active">View Employees</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Employees</h4>
                                        <div class="text-right">
                                            <Link to="/AddEmployee" class="btn btn-dark waves-effect waves-light">Add Employee</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Employee ID</th>
                                                <th>Employee Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                return <tr key={item.employeeId}>
                                                    <td>{++i}</td>
                                                    <td>{item.employeeId}</td>
                                                    <td>{item.employeeFname} {item.employeeMname} {item.employeeLname}</td>
                                                    <td>{item.employeeEmail}</td>
                                                    <td>+91{item.employeeContact}</td>
                                                    <td>
                                                    <button type="button" className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => {editEmployee(item.employeeId)}} >Edit</button>&emsp;
                                                        <Link to="/EmployeeDetails" className="btn btn-outline-success btn btn-sm waves-effect waves-light">Details</Link>&emsp;
                                                        <button type="button" className="btn btn-outline-danger btn btn-sm  waves-effect waves-light" onClick={() => { deleteEmployee(item.employeeId) }}>Delete</button>
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

export default ViewEmployees;