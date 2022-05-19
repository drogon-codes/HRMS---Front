import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function UpdateGrade(){
    return(
        <div>
            <Helmet>
                    <title>HRMS | Update Grade</title>
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
                                    <h4 className="mb-0 font-size-18">Update Grade</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Grades</a></li>
                                            <li className="breadcrumb-item active">Update Grade</li>
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
                                        <h4 className="card-title mb-4">Update Grade</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewGrades" className="btn btn-sm btn btn-warning w-md">View Grades</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Grade name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input" value="O"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Department</label>
                                                        <select className="form-control">
                                                            <option>--Select Department--</option>
                                                            <option selected>HR</option>
                                                            <option>Manufaturing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Mode Of Salary</label>
                                                        <select className="form-control">
                                                            <option>--Select Mode--</option>
                                                            <option selected>Daily</option>
                                                            <option>Hourly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Wage per Hour</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Daily Salary</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input" value="850.75"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">Update</button>
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

export default UpdateGrade;