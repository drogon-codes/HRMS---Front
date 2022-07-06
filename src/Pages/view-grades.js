import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewGrades(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"GradeAPI")  
            .then(result => setData(result.data));  
    } );

    const deleteGrade = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"GradeAPI/" + id).then(navigate("/ViewGrades"));  
        };

    const editGrade = (id) => {  
        navigate("/UpdateGrade/"+id);  
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
                                            <Link to="/AddGrade" class="btn btn-dark waves-effect waves-light">Add Grade</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Grade Name</th>
                                                <th>Mode of Salary</th>
                                                <th>Wage per Hour</th>
                                                <th>Daily Salary</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                    return<tr key={item.gradeId}>
                                                    <td>{++i}</td>
                                                    <td>{item.gradeName}</td>
                                                    <td>{item.modeOfSalary}</td>
                                                    <td>{item.wagePerHour==0 ? '-' : item.wagePerHour}</td>
                                                    <td>{item.dailySalary==0 ? '-' : item.dailySalary}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => { editGrade(item.gradeId) }}>Edit</button>&emsp;
                                                        <button type="button" className="btn btn-outline-danger btn btn-sm  waves-effect waves-light" onClick={() => { deleteGrade(item.gradeId) }}>Delete</button>
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

export default ViewGrades;