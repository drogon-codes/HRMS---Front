import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddSalary(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"EmployeeAPI")  
            .then(result => setData(result.data));  
    } );

    const initialInputState = { employeeId: parseInt(0) };
    const [eachEntry, setEachEntry] = useState(initialInputState);

    const {employeeId} = eachEntry;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        navigate("/Salary/"+eachEntry.employeeId);
        console.log(eachEntry);
      };

    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Imburse Salary</title>
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
                                    <h4 className="mb-0 font-size-18">Imburse Salary</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Salaries</a></li>
                                            <li className="breadcrumb-item active">Imburse Salary</li>
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
                                        <h4 className="card-title mb-4">Imburse new Salary</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewSalaries" className="btn btn-sm btn btn-warning w-md">View Salaries</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                {/* <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Salary name</label>
                                                        <input name="designationName" value={designationName} onChange={handleInputChange} type="text" className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div> */}
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Employee</label>
                                                        <select name="employeeId" value={employeeId} onChange={handleInputChange} className="form-control">
                                                        <option>--Select Employee--</option>
                                                            {data.map(item => {  
                                                                return <option value={item.employeeId}>{item.employeeId} - {item.employeeFname} {item.employeeMname} {item.employeeLname}</option>
                                                            })} 
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" onClick={handleFinalSubmit} className="btn btn-primary w-md">Imburse</button>
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

export default AddSalary;