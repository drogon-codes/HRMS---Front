import React,{useState} from "react";
import {Route, Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios";

function Auth(){
    const initialInputState = { employeeEmail: "" , password:""};
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    let navigate = useNavigate();
    const {employeeEmail} = eachEntry;
    const{password} = eachEntry2;
    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        const data = {employeeEmail:eachEntry.employeeEmail, password:eachEntry2.password}
        axios.post(process.env.REACT_APP_API+"EmployeeAPI/Login",data).then((result)=>{
            if (result.status == '200')  
                {
                    sessionStorage.setItem("isLogin","Yes");
                    sessionStorage.setItem("userName",eachEntry.employeeEmail);
                    if(eachEntry.employeeEmail=="admin@admin"){
                        sessionStorage.setItem("userType","OD");
                    }
                    else{
                        sessionStorage.setItem("userType","HR");
                    }
                    navigate("/Dashboard");
                }
            else if(eachEntry.employeeEmail=="" || eachEntry2.password=="")  
                {
                    alert("Some fields are left empty!!!");
                }
            else
                {
                    alert("Wrong credentials!!!");
                }
        })
        // console.log(eachEntry);
        // console.log(eachEntry2);
      };
//navigate("/Dashboard")
    // console.log(eachEntry);
        return(<div>
            <Helmet>
                    <title>HRMS | Login</title>
            </Helmet>
            <div className="account-pages my-5 pt-sm-5">
            <div className="container">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            {/*eslint no-script-url: 2*/}
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-soft-primary">
                                <div className="row">
                                    <div className="col-7" align="left">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p>Sign in to continue to HRMS.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0"> 
                                <div>
                                    <a href="index.html">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.svg" alt="" className="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2" align="left">
                                    <form className="form-horizontal" action="https://themesbrand.com/skote/layouts/index.html">
        
                                        <div className="form-group">
                                            <label for="employeeEmail">Email Address</label>
                                            <input type="text" className="form-control" name="employeeEmail" onChange={handleInputChange} value={employeeEmail} id="employeeEmail" placeholder="Enter Email"/>
                                        </div>
                
                                        <div className="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" className="form-control" name="password" onChange={handleInputChange} value={password} id="userpassword" placeholder="Enter password"/>
                                        </div>
                
                                        {/* <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                        </div> */}
                                        
                                        <div className="mt-3">
                                            <button className="btn btn-primary btn-block waves-effect waves-light"onClick={handleFinalSubmit}>Log In</button>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            
                            <div>
                                {/* <p>Don't have an account ? <a href="auth-register.html" className="font-weight-medium text-primary"> Signup now </a> </p> */}
                                <p>© <script>document.write(new Date().getFullYear())</script> HRMS.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </div>);
}

export default Auth;