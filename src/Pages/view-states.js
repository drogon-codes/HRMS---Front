import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function ViewStates(prop){

    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        // debugger;  
        Axios  
            .get(process.env.REACT_APP_API+"StateAPI")  
            .then(result => setData(result.data));  
        // debugger;  
    } );

    const deleteState = (id) => {  
        // debugger;  
        Axios.delete(process.env.REACT_APP_API+"StateAPI/" + id).then(navigate("/ViewStates"));  
    };

    const editState = (id) => {  
        navigate("/UpdateState/"+id);  
    }; 
    return(
        <div>
            <Helmet>
                    <title>HRMS | View States</title>
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
                                    <h4 className="mb-0 font-size-18">View States</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">States</a></li>
                                            <li className="breadcrumb-item active">View States</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All States</h4>
                                        <div className="text-right">
                                            <Link to="/AddState" className="btn btn-dark waves-effect waves-light">Add State</Link>
                                        </div>
                                        <br/>
                                        <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse",borderSpacing: "0",width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>State Name</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data.map((item, i=1) => {  
                                                    return <tr key={item.stateId}>  
                                                        <td>{++i}</td>
                                                        <td>{item.stateName}</td>  
                                                        <td>
                                                            <button className="btn btn-outline-primary btn btn-sm waves-effect waves-light" onClick={() => { editState(item.stateId) }}>Edit</button>&emsp;
                                                            <button type="button" className="btn btn-outline-danger btn btn-sm  waves-effect waves-light" onClick={() => { deleteState(item.stateId) }}>Delete</button>
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

export default ViewStates;