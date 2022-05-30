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
        debugger;
        const data = {employeeEmail:eachEntry.employeeEmail, password:eachEntry2.password}
        axios.post(process.env.REACT_APP_API+"EmployeeAPI/Login",data).then(navigate("/Dashboard"));
        console.log(eachEntry);
        console.log(eachEntry2);
      };

    console.log(eachEntry);
        return(<div>
            <Helmet>
                    <title>HRMS | Login</title>
            </Helmet>
            <div class="account-pages my-5 pt-sm-5">
            <div class="container">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            {/*eslint no-script-url: 2*/}
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-soft-primary">
                                <div class="row">
                                    <div class="col-7" align="left">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p>Sign in to continue to HRMS.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div>
                                    <a href="index.html">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.svg" alt="" class="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2" align="left">
                                    <form class="form-horizontal" action="https://themesbrand.com/skote/layouts/index.html">
        
                                        <div class="form-group">
                                            <label for="employeeEmail">Email Address</label>
                                            <input type="text" class="form-control" name="employeeEmail" onChange={handleInputChange} value={employeeEmail} id="employeeEmail" placeholder="Enter employeeEmail"/>
                                        </div>
                
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" class="form-control" name="password" onChange={handleInputChange} value={password} id="userpassword" placeholder="Enter password"/>
                                        </div>
                
                                        {/* <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                                            <label class="custom-control-label" for="customControlInline">Remember me</label>
                                        </div> */}
                                        
                                        <div class="mt-3">
                                            <button className="btn btn-primary btn-block waves-effect waves-light"onClick={handleFinalSubmit}>Log In</button>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                                <p>Don't have an account ? <a href="auth-register.html" class="font-weight-medium text-primary"> Signup now </a> </p>
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