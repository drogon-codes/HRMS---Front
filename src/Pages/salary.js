import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
import Moment from 'moment';
function Salary(){
    const params = useParams();
    const [allGradeMaster, setGradeMaster] = useState([]);
    const [allAllowances, setAllAllowances] = useState([]);
    const [allDeductions, setAllDeductions] = useState([]);
    const [attendance, setAttendance] = useState([]);
    var hours, minutes, total=0, totalMins = 0, totalTime=0, totalWage=0, totalAllowance=0, totalDeduction=0, totalDays=0;
    let navigate = useNavigate();
    const getAttendance = () =>{
        Axios  
        .get(process.env.REACT_APP_API+"AttendanceAPI/AttendanceByEmployee/"+params.employeeId)  
        .then((result) => {
            console.log(result.data);
            setAttendance(result.data);
        })  
    }
    const getEmployeeDetails = () => {
        Axios  
        .get(process.env.REACT_APP_API+"EmployeeAPI/GetEmployee/"+params.employeeId)  
        .then((result) => {
            console.log(result.data);
            setGradeMaster(result.data);
            Axios  
            .get(process.env.REACT_APP_API+"AllowanceGradeAPI/AllowanceDetail/"+result.data.gradeId)  
            .then(result => {console.log(result.data); setAllAllowances(result.data)}); 
            Axios  
            .get(process.env.REACT_APP_API+"DeductionGradeAPI/DeductionDetail/"+result.data.gradeId)  
            .then(result => {console.log(result.data); setAllDeductions(result.data)}); 
        }) 
    }

    // const getAllAllowances = () => {
    //     Axios  
    //         .get(process.env.REACT_APP_API+"AllowanceGradeAPI/AllowanceDetail/"+allGradeMaster.gradeId)  
    //         .then(result => {console.log(result.data); setAllAllowances(result.data)}); 
    //         // console.log(data);
    // }

    // const getAllDeductions = () => {
    //     Axios  
    //         .get(process.env.REACT_APP_API+"DeductionGradeAPI/DeductionDetail/"+allGradeMaster.gradeId)  
    //         .then(result => {console.log(result.data); setAllDeductions(result.data)}); 
    //        // console.log(allDeductions);
    // }
    useEffect(() => {
        getEmployeeDetails();  
        getAttendance();
        // getAllAllowances();
        // getAllDeductions();
        console.log(total);
        // console.log(allGradeMaster);
    }, []);
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Salary Details</title>
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
                                    <h4 className="mb-0 font-size-18">View Salary Details</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Salaries</a></li>
                                            <li className="breadcrumb-item active">View Salary Details</li>
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
                                        <h4 className="card-title mb-4">View new Salary Details</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewGradesHR" className="btn btn-sm btn btn-warning w-md">View Salaries</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <tbody>
                                                <tr>
                                                    <th>Employee Name</th>
                                                    <td>{allGradeMaster.employeeFname} {allGradeMaster.employeeMname} {allGradeMaster.employeeLname}</td>
                                                </tr>
                                                <tr>
                                                    <th>Grade</th>
                                                    <td>{allGradeMaster.gradeName} - {allGradeMaster.designation} - {allGradeMaster.department}</td>
                                                </tr>
                                                <tr>
                                                    <th>{allGradeMaster.modeOfSalary} Payment</th>
                                                    <td>{allGradeMaster.wagePerHour==0?allGradeMaster.dailySalary:allGradeMaster.wagePerHour}</td>
                                                </tr>
                                                <tr>
                                                    <th>Days Present</th>
                                                    <td>
                                                    {attendance.map((item) => {  
                                                        totalDays = totalDays+1;
                                                    return <p>{Moment(item.attendanceDate).format('DD/MM/YYYY')} - {hours=parseFloat(item.totalHours.value.hours)}.{minutes = parseFloat(item.totalHours.value.minutes)}{total = total + hours}{totalMins = totalMins + minutes}</p> })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>{allGradeMaster.wagePerHour==0?"Total Days": "Total Hours"}</th>
                                                    <td>{allGradeMaster.wagePerHour==0?totalDays: totalTime = total + (totalMins/60)}{}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total Basic</th>
                                                    <td>{allGradeMaster.wagePerHour==0?totalWage = parseFloat(allGradeMaster.dailySalary)*totalDays:totalWage = parseFloat(allGradeMaster.wagePerHour)*totalTime}</td>
                                                </tr>
                                                <tr>
                                                    <th>Allowances</th>
                                                    <td>
                                                    {allAllowances.map((item) => {
                                                    totalAllowance += (totalWage*item.allowanceRate)/100
                                                    return <p>{item.allowanceName} - {item.allowanceRate}% - {(totalWage*item.allowanceRate)/100}</p> })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Deductions</th>
                                                    <td>
                                                    {allDeductions.map((item) => {  
                                                    totalDeduction += (totalWage*item.deductionRate)/100
                                                    return <p>{item.deductionName} - {item.deductionRate}% - {(totalWage*item.deductionRate)/100}</p> })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Total Amount Payble</th>
                                                    <td>
                                                        {/* <p>{totalAllowance}</p>
                                                        <p>{totalDeduction}</p> */}
                                                        <b>{(totalWage+totalAllowance) - totalDeduction}/-</b>
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

export default Salary;