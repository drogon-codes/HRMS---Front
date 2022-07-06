import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddHoliday(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();

    const initialInputState = { holidayTitle: "", holidayDate: ""};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    
    const {holidayTitle} = eachEntry;
    const {holidayDate} = eachEntry2;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {holidayTitle:eachEntry.holidayTitle, holidayDate:eachEntry2.holidayDate}
        Axios.post(process.env.REACT_APP_API+"HolidayAPI",data).then(navigate("/ViewHolidays"));
        console.log(eachEntry);
    };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Holiday</title>
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
                                    <h4 className="mb-0 font-size-18">Add Holiday</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Holidays</a></li>
                                            <li className="breadcrumb-item active">Add Holiday</li>
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
                                        <h4 className="card-title mb-4">Add new Holiday</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewHolidays" className="btn btn-sm btn btn-warning w-md">View Holidays</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Holiday name</label>
                                                        <input type="text" name="holidayTitle" onChange={handleInputChange} value={holidayTitle} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Date of Holiday</label>
                                                        <input type="date" name="holidayDate" onChange={handleInputChange} value={holidayDate} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={handleFinalSubmit} className="btn btn-primary w-md">Add</button>
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

export default AddHoliday;