import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddDepartment(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"CityAPI")  
            .then(result => setData(result.data));  
    });

    const initialInputState = { departmentName: "", cityId: parseInt(0), departmentAddress: ""};

    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    const [eachEntry3, setEachEntry3] = useState(initialInputState);

    const {departmentName} = eachEntry;
    const {cityId} = eachEntry2;
    const {departmentAddress} = eachEntry3;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
        setEachEntry3({...eachEntry3,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {departmentName:eachEntry.departmentName, cityId:parseInt(eachEntry2.cityId), departmentAddress:eachEntry3.departmentAddress}
        Axios.post(process.env.REACT_APP_API+"DepartmentAPI",data).then(navigate("/ViewDepartments"));
        console.log(eachEntry);
      };
    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Add Department</title>
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
                                    <h4 className="mb-0 font-size-18">Add Department</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Departments</a></li>
                                            <li className="breadcrumb-item active">Add Department</li>
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
                                        <h4 className="card-title mb-4">Add new Department</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewDepartments" className="btn btn-sm btn btn-warning w-md">View Departments</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Department name</label>
                                                        <input type="text" onChange={handleInputChange} name="departmentName" value={departmentName} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">City</label>
                                                        <select className="form-control" onChange={handleInputChange} name="cityId" value={cityId}>
                                                            <option>--Select City--</option>
                                                            {data.map(item => {  
                                                                return <option value={item.cityId}>{item.cityName}</option>
                                                            })}  
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Department Address</label>
                                                        <textarea className="form-control" onChange={handleInputChange} name="departmentAddress" value={departmentAddress} id="formrow-firstname-input"></textarea>
                                                    </div>
                                                </div>
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

export default AddDepartment;