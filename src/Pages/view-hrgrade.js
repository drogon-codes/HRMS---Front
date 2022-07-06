import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewGradesHR(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"GradeAPI/HrGrade")  
            .then(result => setData(result.data));  
    } );

    const deleteHrGrade = (designationGradeId, allowanceGradeId, deductionGradId) => {  
        // debugger;  GradeAPI/HrGrade/7/7/7
        Axios.delete(process.env.REACT_APP_API+"GradeAPI/HrGrade/"+designationGradeId+"/"+allowanceGradeId+"/"+deductionGradId).then(navigate("/ViewGradesHR"));  
    };

    const editHrGrade = (gradeId, desId, allId, dedId) => {  
        navigate("/UpdateGradeHR/"+gradeId+"/"+desId+"/"+allId+"/"+dedId);  
    };

    const viewHrGrade = (gradeId) => {  
        navigate("/ViewGradeDetails/"+gradeId);  
    };
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Grades</title>
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
                                    <h4 className="mb-0 font-size-18">View Grades</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Grades</a></li>
                                            <li className="breadcrumb-item active">View Grades</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Grades</h4>
                                        <div class="text-right">
                                            <Link to="/AddGradeHR" class="btn btn-dark waves-effect waves-light">Add Grade</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            {/* 1 jj grade na multiple records ahiya aavse */}
                                            <tr>
                                                <th>#</th>
                                                <th>Grade Name</th>
                                                <th>Mode of Payment - Amount</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                    return <tr>
                                                    <td>{++i}</td>
                                                    <td>{item.gradeName}</td>
                                                    <td>{item.wagePerHour=='0'?"Daily - ":"Wage Per Hour - "}{item.wagePerHour=='0'?item.dailySalary:item.wagePerHour}</td>
                                                    {/* <td>{item.designationGradeId},{item.allowanceGradeId},{item.deductionGradId}</td> */}
                                                    <td>
                                                        <button type="button" onClick={() => { viewHrGrade(item.gradeId) }} className="btn btn-outline-success btn btn-sm waves-effect waves-light">View</button>&emsp;
                                                        {/* <button type="button" onClick={() => { editHrGrade(item.gradeId, item.designationGradeId, item.allowanceGradeId, item.deductionGradId) }} className="btn btn-outline-primary btn btn-sm waves-effect waves-light">Edit</button>&emsp;
                                                        <button type="button" onClick={() => { deleteHrGrade(item.designationGradeId, item.allowanceGradeId, item.deductionGradId) }} class="btn btn-outline-danger btn btn-sm  waves-effect waves-light">Delete</button> */}
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

export default ViewGradesHR;