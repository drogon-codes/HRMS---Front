import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddCity(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"StateAPI")  
            .then(result => setData(result.data));  
    } );

    const initialInputState = { cityName: "", stateId: parseInt(0) };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    
    const {cityName} = eachEntry;
    const {stateId} = eachEntry2;

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {cityName:eachEntry.cityName, stateId:parseInt(eachEntry2.stateId)}
        Axios.post(process.env.REACT_APP_API+"CityAPI",data).then(navigate("/ViewCities"));
        console.log(eachEntry);
      };

    console.log(eachEntry);
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
                                                        <label htmlFor="formrow-firstname-input">City name</label>
                                                        <input type="text" name="cityName" onChange={handleInputChange} value={cityName} className="form-control" id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">State</label>
                                                        <select className="form-control" onChange={handleInputChange} value={stateId} name="stateId">
                                                            <option>--Select State--</option>
                                                            {data.map(item => {  
                                                                return <option value={item.stateId}>{item.stateName}</option>
                                                            })}  
                                                        </select>
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

export default AddCity;