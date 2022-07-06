import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewGradeDetails(){
    const params = useParams();
    const [allGradeMaster, setGradeMaster] = useState([]);
    const [allGrades, setAllGrades] = useState([]);
    const [allAllowances, setAllAllowances] = useState([]);
    const [allDeductions, setAllDeductions] = useState([]);
    let navigate = useNavigate();

    const getGradeMaster = () => {
        Axios  
        .get(process.env.REACT_APP_API+"GradeAPI/"+params.gradeId)  
        .then((result) => {
            console.log(result.data);
            setGradeMaster(result.data);
        })  
    }
    const getGradeData = () => {
        Axios  
            .get(process.env.REACT_APP_API+"GradeAPI/GradeDetail/"+params.gradeId)  
            .then(result => {console.log(result.data); setAllGrades(result.data)}); 
            // console.log(data);
    }

    const getAllAllowances = () => {
        Axios  
            .get(process.env.REACT_APP_API+"AllowanceGradeAPI/AllowanceDetail/"+params.gradeId)  
            .then(result => setAllAllowances(result.data)); 
            // console.log(data);
    }

    const getAllDeductions = () => {
        Axios  
            .get(process.env.REACT_APP_API+"DeductionGradeAPI/DeductionDetail/"+params.gradeId)  
            .then(result => setAllDeductions(result.data)); 
           // console.log(allDeductions);
    }
    useEffect(() => {  
        getGradeMaster();
        getGradeData();
        getAllAllowances();
        getAllDeductions();
        // console.log(allGradeMaster);
    }, []);
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Grade Details</title>
                </Helmet>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            {/*eslint no-script-url: 2*/}
            <Header/>
            <Sidebar/>
            <div className="main-content" align="left">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">View Grade Details</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Grades</a></li>
                                            <li className="breadcrumb-item active">View Grade Details</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">View new Grade Details</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewGradesHR" className="btn btn-sm btn btn-warning w-md">View Grades</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <tbody>
                                                <tr>
                                                    <th>Grade Name</th>
                                                    <td>{allGradeMaster.gradeName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Mode Of Salary</th>
                                                    <td>{allGradeMaster.modeOfSalary}</td>
                                                </tr>
                                                <tr>
                                                    <th>Amount</th>
                                                    <td>{allGradeMaster.wagePerHour==0?allGradeMaster.dailySalary:allGradeMaster.wagePerHour}</td>
                                                </tr>
                                                <tr>
                                                    <th>Designation</th>
                                                    <td>{allGrades.designationName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Department</th>
                                                    <td>{allGrades.departmentName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Allowances</th>
                                                    <td>
                                                    {allAllowances.map((item) => {  
                                                    return <p>{item.allowanceName} - {item.allowanceRate}%</p> })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Deductions</th>
                                                    <td>
                                                    {allDeductions.map((item) => {  
                                                    return <p>{item.deductionName} - {item.deductionRate}%</p> })}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
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

export default ViewGradeDetails;