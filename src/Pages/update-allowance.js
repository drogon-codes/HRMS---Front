import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios";
function UpdateAllowance(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const initialInputState = { allowanceId:parseInt(0), allowanceName: "", isTaxable: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);

    const {allowanceName} = eachEntry;
    const {isTaxable} = eachEntry2;

    useEffect(() => {  
        const GetData = async () => {  
          const result = await axios(process.env.REACT_APP_API+"AllowanceAPI/"+params.id);  
          setEachEntry(result.data);
          setEachEntry2(result.data);
          console.log(result.data);
        };  
        GetData();  
      }, []);

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {allowanceId:parseInt(params.id), allowanceName:eachEntry.allowanceName, isTaxable:eachEntry2.isTaxable}
        axios.put(process.env.REACT_APP_API+"AllowanceAPI/"+params.id,data).then(navigate("/ViewAllowances"));
        console.log(eachEntry);
    };
    return(
        <div>
            <Helmet>
                    <title>HRMS | Update Allowance</title>
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
                                    <h4 className="mb-0 font-size-18">Update Allowance</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Allowances</a></li>
                                            <li className="breadcrumb-item active">Update Allowance</li>
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
                                        <h4 className="card-title mb-4">Update Allowance</h4>
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
                                                        <select name="isTaxable" value={isTaxable} onChange={handleInputChange} className="form-control">
                                                            <option>--Select--</option>
                                                            <option value={"Yes"}>Yes</option>
                                                            <option value={"No"}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" onClick={handleFinalSubmit} className="btn btn-primary w-md">Update</button>
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

export default UpdateAllowance;