import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewDeductions(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"DeductionAPI")  
            .then(result => setData(result.data));  
    } );

    const deleteAllowance = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"DeductionAPI/" + id).then(navigate("/ViewDeductions"));  
    };

    const editAllowance = (id) => {  
        navigate("/UpdateDeduction/"+id);  
    };
    return(
        <div>
            <Helmet>
                    <title>HRMS | View Deductions</title>
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
                                    <h4 className="mb-0 font-size-18">View Deductions</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Deductions</a></li>
                                            <li className="breadcrumb-item active">View Deductions</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Deductions</h4>
                                        <div class="text-right">
                                            <Link to="/AddDeduction" class="btn btn-dark waves-effect waves-light">Add Deduction</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Deduction Name</th>
                                                <th>Deduction Type</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                    return <tr key={item.deductionId}>
                                                    <td>{++i}</td>
                                                    <td>{item.deductionName}</td>
                                                    <td>{item.deductionType}</td>
                                                    <td>
                                                        <button type="button" onClick={() => { editAllowance(item.deductionId) }} className="btn btn-outline-primary btn btn-sm waves-effect waves-light">Edit</button>&emsp;
                                                        <button type="button" onClick={() => { deleteAllowance(item.deductionId) }} className="btn btn-outline-danger btn btn-sm  waves-effect waves-light">Delete</button>
                                                    </td>
                                                </tr>
                                            })}
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

export default ViewDeductions;