import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewEmployeeGrade(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"EmployeeAPI/AllEmployees")  
            .then(result => setData(result.data));  
    } );

    const deleteGradeEmployee = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"EmployeeGradeAPI/" + id).then(navigate("/ViewEmployeeGrade"));  
        };

    const editGradeEmployee = (id) => {  
        navigate("/UpdateEmployeeGrade/"+id);  
        }; 

    const promoteEmployee = (id) => {  
        navigate("/AddPromotion/"+id);  
        }; 
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Graded Employees</title>
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
                                    <h4 className="mb-0 font-size-18">View Graded Employees</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Graded Employees</a></li>
                                            <li className="breadcrumb-item active">View Graded Employees</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Graded Employees</h4>
                                        <div class="text-right">
                                            <Link to="/AddEmployeeGrade" class="btn btn-dark waves-effect waves-light">Assign Grade</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Employee Id</th>
                                                <th>Employee Name</th>
                                                <th>Grade</th>
                                                <th>Designation</th>
                                                <th>Department</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, i=1) => {  
                                                    return<tr key={item.employeeGradeId}>
                                                    <td>{++i}</td>
                                                    <td>{item.employeeId}</td>
                                                    <td>{item.employeeFname} {item.employeeMname} {item.employeeLname}</td>
                                                    <td>{item.gradeName}</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.department}</td>
                                                    <td>
                                                        <button className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => { editGradeEmployee(item.employeeGradeId) }}>Edit</button>&emsp;
                                                        {/* <button className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => { editGradeEmployee(item.employeeGradeId) }}>Promote</button>&emsp; */}
                                                        <button type="button" class="btn btn-outline-danger btn btn-sm  waves-effect waves-light" onClick={() => { deleteGradeEmployee(item.employeeGradeId) }}>Delete</button>
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

export default ViewEmployeeGrade;