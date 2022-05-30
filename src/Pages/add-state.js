import React,{useState} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios";
function AddState(){
    const initialInputState = { stateName: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [showLoading, setShowLoading] = useState(false);
    let navigate = useNavigate();
    const {stateName} = eachEntry;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        debugger;
        const data = {stateName:eachEntry.stateName}
        axios.post(process.env.REACT_APP_API+"StateAPI",data).then(navigate("/ViewStates"));
        console.log(eachEntry);
      };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add State</title>
                </Helmet>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Header/>
            <Sidebar/>
            <div className="main-content" align="left">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Add State</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Manage States</a></li>
                                            <li className="breadcrumb-item active">Add State</li>
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
                                        <h4 className="card-title mb-4">Add new State</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewStates" className="btn btn-sm btn btn-warning w-md">View States</Link>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="formrow-firstname-input">State name</label>
                                                <input type="text" className="form-control" name="stateName"  onChange={handleInputChange} value={stateName} id="formrow-firstname-input"/>
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

export default AddState;