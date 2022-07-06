import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddGrade(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();

    const initialInputState = { gradeName: "", modeOfSalary: "", wagePerHour: parseFloat(0), dailySalary: parseFloat(0)};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    const [eachEntry3, setEachEntry3] = useState(initialInputState);
    const [eachEntry4, setEachEntry4] = useState(initialInputState);

    const {gradeName} = eachEntry;
    const {modeOfSalary} = eachEntry2;
    const {amountOfPayment} = eachEntry3;
    // const {dailySalary} = eachEntry4;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
        setEachEntry3({...eachEntry3,[e.target.name]: e.target.value});
        // setEachEntry4({...eachEntry4,[e.target.name]: e.target.value});
    };

      const handleFinalSubmit = e => {
        e.preventDefault();
        if(eachEntry2.modeOfSalary === "Daily"){
            // console.log("Daily");
            const data = {gradeName:eachEntry.gradeName, modeOfSalary:eachEntry2.modeOfSalary, wagePerHour:parseFloat(0), dailySalary:parseFloat(eachEntry3.amountOfPayment)}
            Axios.post(process.env.REACT_APP_API+"GradeAPI",data).then(navigate("/ViewGrades"));
        }
        else{
            const data = {gradeName:eachEntry.gradeName, modeOfSalary:eachEntry2.modeOfSalary, wagePerHour:parseFloat(eachEntry3.amountOfPayment), dailySalary:parseFloat(0)}
            Axios.post(process.env.REACT_APP_API+"GradeAPI",data).then(navigate("/ViewGrades"));
        }
        // debugger;{ gradeName: "", modeOfSalary: "", wagePerHour: parseFloat(0), dailySalary: parseFloat(0)}
        // .then(navigate("/ViewGrades"))
        console.log(eachEntry);
    };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Grade</title>
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
                                    <h4 className="mb-0 font-size-18">Add Grade</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Grades</a></li>
                                            <li className="breadcrumb-item active">Add Grade</li>
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
                                        <h4 className="card-title mb-4">Add new Grade</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewGrades" className="btn btn-sm btn btn-warning w-md">View Grades</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Grade name</label>
                                                        <input type="text" name="gradeName" value={gradeName} onChange={handleInputChange} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                {/* <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Department</label>
                                                        <select className="form-control">
                                                            <option>--Select Department--</option>
                                                            <option>HR</option>
                                                            <option>Manufacturing</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Mode Of Salary</label>
                                                        <select className="form-control" name="modeOfSalary" value={modeOfSalary} onChange={handleInputChange}>
                                                            <option>--Select Mode--</option>
                                                            <option value={"Daily"}>Daily</option>
                                                            <option value={"Hourly"}>Hourly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Amount of Payment</label>
                                                        <input type="text" name="amountOfPayment" value={amountOfPayment} onChange={handleInputChange} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                {/* <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Daily Salary</label>
                                                        <input type="text" name="dailySalary" value={dailySalary} onChange={handleInputChange} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div>
                                                <button type="button" onClick={handleFinalSubmit} className="btn btn-primary w-md">Add</button>
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

export default AddGrade;