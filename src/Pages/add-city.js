import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function AddCity(){
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add City</title>
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
                                    <h4 className="mb-0 font-size-18">Add City</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Cities</a></li>
                                            <li className="breadcrumb-item active">Add City</li>
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
                                        <h4 className="card-title mb-4">Add new City</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewCities" className="btn btn-sm btn btn-warning w-md">View Cities</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label for="formrow-firstname-input">City name</label>
                                                        <input type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                <div className="form-group">
                                                        <label for="formrow-firstname-input">State</label>
                                                        <select className="form-control">
                                                            <option>--Select State--</option>
                                                            <option>Gujarat</option>
                                                            <option>Maharashtra</option>
                                                        </select>
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

export default AddCity;