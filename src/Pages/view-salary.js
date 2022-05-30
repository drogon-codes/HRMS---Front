import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
function ViewSalary(){
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Salary</title>
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
                                    <h4 className="mb-0 font-size-18">View Salary</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Salary</a></li>
                                            <li className="breadcrumb-item active">View Salary</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Salary</h4>
                                        {/* <div class="text-right">
                                            <Link to="/AddEmployee" class="btn btn-dark waves-effect waves-light">Add Salary</Link>
                                        </div> */}
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Employee</th>
                                                <th>Date of Embursement</th>
                                                <th>Basic</th>
                                                <th>Allowances</th> {/*Iterable*/}
                                                <th>Gross Salary</th>
                                                <th>Deductions</th> {/*Iterable*/}
                                                <th>Net(Total) Salary</th>
                                                <th>Payment ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Someshchandra Hemabhai Lathiya - 145260</td>
                                                    <td>31-04-2022</td>
                                                    <td>25500</td>
                                                    <td>DA - 5500</td>
                                                    <td>31500</td>
                                                    <td>PF - 1500</td>
                                                    <td>30000</td>
                                                    <td>rzp-145hjdk114820</td>
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

export default ViewSalary;