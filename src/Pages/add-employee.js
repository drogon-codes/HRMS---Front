import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function AddEmployee(){
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Employee</title>
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
                                    <h4 className="mb-0 font-size-18">Add Employee</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Employees</a></li>
                                            <li className="breadcrumb-item active">Add Employee</li>
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
                                        <h4 className="card-title mb-4">Add new Employee</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewEmployees" className="btn btn-sm btn btn-warning w-md">View Employees</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">First Name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Middle Name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Last Name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">D.O.B.</label>
                                                        <input type="date" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Contact</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Email</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Date of Joining</label>
                                                        <input type="date" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Address</label>
                                                        <textarea className="form-control" id="formrow-firstname-input"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">City</label>
                                                        <select className="form-control">
                                                            <option>--Select City--</option>
                                                            <option>Surat</option>
                                                            <option>Mumbai</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Qualifications</label>
                                                        <textarea className="form-control" id="formrow-firstname-input"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Experiance</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Bank Account number</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">IFSC Code</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Account Holder Name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">Add</button>
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

export default AddEmployee;