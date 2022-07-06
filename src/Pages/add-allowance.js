import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddAllowance(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();

    const initialInputState = { allowanceName: "", isTaxable: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);

    const {allowanceName} = eachEntry;
    const {isTaxable} = eachEntry2;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {allowanceName:eachEntry.allowanceName, isTaxable:eachEntry2.isTaxable}
        Axios.post(process.env.REACT_APP_API+"AllowanceAPI",data).then(navigate("/ViewAllowances"));
        console.log(eachEntry);
      };

    console.log(eachEntry);

    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Allowance</title>
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
                                    <h4 className="mb-0 font-size-18">Add Allowance</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Allowances</a></li>
                                            <li className="breadcrumb-item active">Add Allowance</li>
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
                                        <h4 className="card-title mb-4">Add new Allowance</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewAllowances" className="btn btn-sm btn btn-warning w-md">View Allowances</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Allowance name</label>
                                                        <input type="text" name="allowanceName" value={allowanceName} onChange={handleInputChange} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Is Taxable?</label>
                                                        <select className="form-control" name="isTaxable" value={isTaxable} onChange={handleInputChange}>
                                                            <option>--Select--</option>
                                                            <option value={"Yes"}>Yes</option>
                                                            <option value={"No"}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
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

export default AddAllowance;