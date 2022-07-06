import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddEmployeeGrade(){
    const [empData, setEmpData] = useState([]);  
    const [gradeData, setGradeData] = useState([]);  
    let navigate = useNavigate();

    const GetEmpData = () =>{
        Axios  
        .get(process.env.REACT_APP_API+"EmployeeAPI/UngradeEmployee")  
        .then(result => setEmpData(result.data));  
    }

    const GetGradeData = () =>{
        Axios  
        .get(process.env.REACT_APP_API+"GradeAPI")  
        .then(result => setGradeData(result.data));  
    }
    useEffect(() => {  
       GetEmpData();
       GetGradeData();
    },[] );

    const initialInputState = { employeeId: parseInt(0), gradeId: parseInt(0), isActive: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    
    const {employeeId} = eachEntry;
    const {gradeId} = eachEntry2;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {employeeId:parseInt(eachEntry.employeeId), gradeId:parseInt(eachEntry2.gradeId), isActive: "Y"}
        Axios.post(process.env.REACT_APP_API+"EmployeeGradeAPI",data).then(navigate("/ViewEmployeeGrade"));
        console.log(eachEntry);
      };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Assign Grade to Employee</title>
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
                                    <h4 className="mb-0 font-size-18">Assign Grade to Employee</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Employees</a></li>
                                            <li className="breadcrumb-item active">Assign Grade to Employee</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Assign Grade to New Employee</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewEmployeeGrade" className="btn btn-sm btn btn-warning w-md">View Employee Grade</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Employee</label>
                                                        <select className="form-control" onChange={handleInputChange} value={employeeId} name="employeeId">
                                                            <option>--Select Employee--</option>
                                                            {empData.map(item => {  
                                                                return <option value={item.employeeId}>{item.employeeId} - {item.employeeFname} {item.employeeMname} {item.employeeLname}</option>
                                                            })}  
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Grade</label>
                                                        <select className="form-control" onChange={handleInputChange} value={gradeId} name="gradeId">
                                                            <option>--Select Grade--</option>
                                                            {gradeData.map(item => {  
                                                                return <option value={item.gradeId}>{item.gradeName}</option>
                                                            })}  
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={handleFinalSubmit} className="btn btn-primary w-md">Assign</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
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

export default AddEmployeeGrade;