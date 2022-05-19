import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
function ViewAllowances(){
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Allowances</title>
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
                                    <h4 className="mb-0 font-size-18">View Allowances</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Allowances</a></li>
                                            <li className="breadcrumb-item active">View Allowances</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Allowances</h4>
                                        <div class="text-right">
                                            <Link to="/AddAllowance" class="btn btn-dark waves-effect waves-light">Add Allowance</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Allowance Name</th>
                                                <th>Is Taxable?</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>DA</td>
                                                    <td>No</td>
                                                    <td>
                                                        <Link to="/UpdateAllowance" className="btn btn-outline-primary btn btn-sm waves-effect waves-light">Edit</Link>&emsp;
                                                        <button type="button" class="btn btn-outline-danger btn btn-sm  waves-effect waves-light">Delete</button>
                                                    </td>
                                                </tr>
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

export default ViewAllowances;