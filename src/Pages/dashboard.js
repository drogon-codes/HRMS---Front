import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Dashboard() {
        return (
            <div>
                <Helmet>
                    <title>HRMS | Dashboard</title>
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
                                        <h4 className="mb-0 font-size-18">HRMS Admin/HR Dashboard</h4>

                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                                <li className="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="media">
                                                        <div className="mr-3">
                                                            <img src="https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="text-muted">
                                                                <p className="mb-2">Welcome to HRMS Dashboard</p>
                                                                <h5 className="mb-1">Admin(name will come here)</h5>
                                                                <p className="mb-0">Organization Designer / Human Resource Manager</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 align-self-center">
                                                    <div className="text-lg-center mt-4 mt-lg-0">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Total Employees</p>
                                                                    <h5 className="mb-0">48</h5>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Designations</p>
                                                                    <h5 className="mb-0">40</h5>
                                                                </div>
                                                            </div>
                                                            <div className="col-4">
                                                                <div>
                                                                    <p className="text-muted text-truncate mb-2">Vacent Grades</p>
                                                                    <h5 className="mb-0">18</h5>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card bg-soft-primary">
                                        <div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <div className="text-primary p-3">
                                                        <h5 className="text-primary">Welcome Back !</h5>
                                                        <p>HRMS Dashboard</p>
                                                    </div>
                                                </div>
                                                <div className="col-5 align-self-end">
                                                    <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-copy-alt"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Employees</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>1,452 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>
                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-archive-in"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Salaries</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>$ 28,452 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>
                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="avatar-xs mr-3">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                                <i className="bx bx-purchase-tag-alt"></i>
                                                            </span>
                                                        </div>
                                                        <h5 className="font-size-14 mb-0">Vacent Positions</h5>
                                                    </div>
                                                    <div className="text-muted mt-4">
                                                        <h4>$ 16.2 <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>

                                                        <div className="d-flex">
                                                            <span className="badge badge-soft-warning font-size-12"> 0% </span> <span className="ml-2 text-truncate">From previous period</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="clearfix">
                                                <div className="float-right">
                                                    <div className="input-group input-group-sm">
                                                        <select className="custom-select custom-select-sm">
                                                            <option>Jan</option>
                                                            <option value="1">Dec</option>
                                                            <option value="2">Nov</option>
                                                            <option value="3">Oct</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <label className="input-group-text">Month</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="card-title mb-4">Earning</h4>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="text-muted">
                                                        <div className="mb-4">
                                                            <p>This month</p>
                                                            <h4>$2453.35</h4>
                                                            <div><span className="badge badge-soft-success font-size-12 mr-1"> + 0.2% </span> From previous period</div>
                                                        </div>

                                                        <div>
                                                            <a href="#" className="btn btn-primary waves-effect waves-light btn-sm">View Details <i className="mdi mdi-chevron-right ml-1"></i></a>
                                                        </div>

                                                        <div className="mt-4">
                                                            <p className="mb-2">Last month</p>
                                                            <h5>$2281.04</h5>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div id="line-chart" className="apex-charts" dir="ltr"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title mb-4">Sales Analytics</h4>

                                            <div>
                                                <div id="donut-chart" className="apex-charts"></div>
                                            </div>

                                            <div className="text-center text-muted">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary mr-1"></i> Product A</p>
                                                            <h5>$ 2,132</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-success mr-1"></i> Product B</p>
                                                            <h5>$ 1,763</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-danger mr-1"></i> Product C</p>
                                                            <h5>$ 973</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="clearfix">
                                                <div className="float-right">
                                                    <div className="input-group input-group-sm">
                                                        <select className="custom-select custom-select-sm">
                                                            <option>Jan</option>
                                                            <option value="1">Dec</option>
                                                            <option value="2">Nov</option>
                                                            <option value="3">Oct</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <label className="input-group-text">Month</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="card-title mb-4">Top Selling product</h4>
                                            </div>

                                            <div className="text-muted text-center">
                                                <p className="mb-2">Product A</p>
                                                <h4>$ 6385</h4>
                                                <p className="mt-4 mb-0"><span className="badge badge-soft-success font-size-11 mr-2"> 0.6% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>
                                            </div>

                                            <div className="table-responsive mt-4">
                                                <table className="table table-centered mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h5 className="font-size-14 mb-1">Product A</h5>
                                                                <p className="text-muted mb-0">Neque quis est</p>
                                                            </td>

                                                            <td>
                                                                <div id="radialchart-1" className="apex-charts"></div>
                                                            </td>
                                                            <td>
                                                                <p className="text-muted mb-1">Sales</p>
                                                                <h5 className="mb-0">37 %</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="font-size-14 mb-1">Product B</h5>
                                                                <p className="text-muted mb-0">Quis autem iure</p>
                                                            </td>

                                                            <td>
                                                                <div id="radialchart-2" className="apex-charts"></div>
                                                            </td>
                                                            <td>
                                                                <p className="text-muted mb-1">Sales</p>
                                                                <h5 className="mb-0">72 %</h5>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="font-size-14 mb-1">Product C</h5>
                                                                <p className="text-muted mb-0">Sed aliquam mauris.</p>
                                                            </td>

                                                            <td>
                                                                <div id="radialchart-3" className="apex-charts"></div>
                                                            </td>
                                                            <td>
                                                                <p className="text-muted mb-1">Sales</p>
                                                                <h5 className="mb-0">54 %</h5>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title mb-4">Tasks</h4>

                                            <ul className="nav nav-pills bg-light rounded">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#">In Process</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Upcoming</a>
                                                </li>
                                            </ul>

                                            <div className="mt-4">
                                                <div data-simplebar style={{maxHeight:" 250px"}}>

                                                    <div className="table-responsive">
                                                        <table className="table table-nowrap table-centered table-hover mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{width:" 50px"}}>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                                                            <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Skote Saas Dashboard</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Mark</p>
                                                                    </td>
                                                                    <td style={{width:" 90px"}}>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                            <label className="custom-control-label" htmlFor="customCheck2"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">New Landing UI</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Team A</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                            <label className="custom-control-label" htmlFor="customCheck3"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Brand logo design</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Janis</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                                            <label className="custom-control-label" htmlFor="customCheck4"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Blog Template UI</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Dianna</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                            <label className="custom-control-label" htmlFor="customCheck5"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Multipurpose Landing</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Team B</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                                            <label className="custom-control-label" htmlFor="customCheck6"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Redesign - Landing page</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Jerry</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                                            <label className="custom-control-label" htmlFor="customCheck7"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h5 className="text-truncate font-size-14 mb-1"><a href="#" className="text-dark">Skote Crypto Dashboard</a></h5>
                                                                        <p className="text-muted mb-0">Assigned to Eric</p>
                                                                    </td>
                                                                    <td>
                                                                        <div>
                                                                            <ul className="list-inline mb-0 font-size-16">
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-success p-1"><i className="bx bxs-edit-alt"></i></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href="#" className="text-danger p-1"><i className="bx bxs-trash"></i></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer bg-transparent border-top">
                                            <div className="text-center">
                                                <a href="#" className="btn btn-primary waves-effect waves-light"> Add new Task</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body border-bottom">
                                            <div className="row">
                                                <div className="col-md-4 col-9">
                                                    <h5 className="font-size-15 mb-1">Steven Franklin</h5>
                                                    <p className="text-muted mb-0"><i className="mdi mdi-circle text-success align-middle mr-1"></i> Active now</p>
                                                </div>
                                                <div className="col-md-8 col-3">
                                                    <ul className="list-inline user-chat-nav text-right mb-0">
                                                        <li className="list-inline-item d-none d-sm-inline-block">
                                                            <div className="dropdown">
                                                                <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-search-alt-2"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-md">
                                                                    <form className="p-3">
                                                                        <div className="form-group m-0">
                                                                            <div className="input-group">
                                                                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                                                <div className="input-group-append">
                                                                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-inline-item  d-none d-sm-inline-block">
                                                            <div className="dropdown">
                                                                <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-cog"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">View Profile</a>
                                                                    <a className="dropdown-item" href="#">Clear chat</a>
                                                                    <a className="dropdown-item" href="#">Muted</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-inline-item">
                                                            <div className="dropdown">
                                                                <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Action</a>
                                                                    <a className="dropdown-item" href="#">Another action</a>
                                                                    <a className="dropdown-item" href="#">Something else</a>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pb-0">
                                            <div>
                                                <div className="chat-conversation">
                                                    <ul className="list-unstyled" data-simplebar style={{maxHeight: "260px"}}>
                                                        <li>
                                                            <div className="chat-day-title">
                                                                <span className="title">Today</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="conversation-list">
                                                                <div className="dropdown">

                                                                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy</a>
                                                                        <a className="dropdown-item" href="#">Save</a>
                                                                        <a className="dropdown-item" href="#">Forward</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="ctext-wrap">
                                                                    <div className="conversation-name">Steven Franklin</div>
                                                                    <p>
                                                                        Hello!
                                                                    </p>
                                                                    <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> 10:00</p>
                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li className="right">
                                                            <div className="conversation-list">
                                                                <div className="dropdown">

                                                                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy</a>
                                                                        <a className="dropdown-item" href="#">Save</a>
                                                                        <a className="dropdown-item" href="#">Forward</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="ctext-wrap">
                                                                    <div className="conversation-name">Henry Wells</div>
                                                                    <p>
                                                                        Hi, How are you? What about our next meeting?
                                                                    </p>

                                                                    <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> 10:02</p>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="conversation-list">
                                                                <div className="dropdown">

                                                                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy</a>
                                                                        <a className="dropdown-item" href="#">Save</a>
                                                                        <a className="dropdown-item" href="#">Forward</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="ctext-wrap">
                                                                    <div className="conversation-name">Steven Franklin</div>
                                                                    <p>
                                                                        Yeah everything is fine
                                                                    </p>

                                                                    <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> 10:06</p>
                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li className="last-chat">
                                                            <div className="conversation-list">
                                                                <div className="dropdown">

                                                                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy</a>
                                                                        <a className="dropdown-item" href="#">Save</a>
                                                                        <a className="dropdown-item" href="#">Forward</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="ctext-wrap">
                                                                    <div className="conversation-name">Steven Franklin</div>
                                                                    <p>& Next meeting tomorrow 10.00AM</p>
                                                                    <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> 10:06</p>
                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li className=" right">
                                                            <div className="conversation-list">
                                                                <div className="dropdown">

                                                                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Copy</a>
                                                                        <a className="dropdown-item" href="#">Save</a>
                                                                        <a className="dropdown-item" href="#">Forward</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="ctext-wrap">
                                                                    <div className="conversation-name">Henry Wells</div>
                                                                    <p>
                                                                        Wow that's great
                                                                    </p>

                                                                    <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> 10:07</p>
                                                                </div>
                                                            </div>
                                                        </li>


                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="p-3 chat-input-section">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control rounded chat-input" placeholder="Enter Message..." />
                                                        <div className="chat-input-links">
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Emoji"><i className="mdi mdi-emoticon-happy-outline"></i></a></li>
                                                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Images"><i className="mdi mdi-file-image-outline"></i></a></li>
                                                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Add Files"><i className="mdi mdi-file-document-outline"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">Send</span> <i className="mdi mdi-send"></i></button>
                                                </div>
                                            </div>
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

export default Dashboard;