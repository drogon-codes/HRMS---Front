import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewAttendance(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"AttendanceAPI")  
            .then(result => setData(result.data));  
            console.log(data);
    },[] );
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Attendance</title>
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
                                    <h4 className="mb-0 font-size-18">View Attendance</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Attendance</a></li>
                                            <li className="breadcrumb-item active">View Attendance</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Attendance</h4>
                                        {/* <div class="text-right">
                                            <Link to="/AddEmployee" class="btn btn-dark waves-effect waves-light">Add Attendance</Link>
                                        </div> */}
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Employee</th>
                                                <th>Time of Arrival</th>
                                                <th>Time of Leave</th>
                                                <th>Overtime Hours</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                    return<tr key={item.attendanceId}>
                                                    <td>{++i}</td>
                                                    <td>{item.employeeId}</td>
                                                    <td>{item.timeOfArrival.value.hours}:{item.timeOfArrival.value.minutes}:{item.timeOfArrival.value.seconds}</td>
                                                    <td>{item.timeOfLeave.value.hours}:{item.timeOfLeave.value.minutes}:{item.timeOfLeave.value.seconds}</td>
                                                    <td>{item.overTimeHours}</td>
                                                    <td>{item.attendanceDate}</td>
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

export default ViewAttendance;