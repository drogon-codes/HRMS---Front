import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Axios from 'axios'; 
function AddEmployee(){
    const [data, setData] = useState([]);  
    let navigate = useNavigate();
    useEffect(() => {  
        Axios  
            .get(process.env.REACT_APP_API+"CityAPI")  
            .then(result => setData(result.data));  
    },[]);

    const params = useParams();

    const initialInputState = { 
        employeeId: parseInt(0),
        employeeFname: "",
        employeeMname: "",
        employeeLname: "",
        employeeEmail: "",
        password: "",
        employeeContact: "",
        employeeDoj: "",
        employeeAddress: "",
        cityId: parseInt(0),
        panNo: "",
        panCopy: "",
        qualifications: "",
        experiance: parseInt(0),
        bankAcNo: "",
        bankIfsccode: "",
        bankHolderName: ""
     };

    const initialInputState2 ={employeeId:parseInt(0), gradeId: parseInt(0)};

    const [eachEntry, setEachEntry] = useState(initialInputState);
    const [eachEntry2, setEachEntry2] = useState(initialInputState);
    const [eachEntry3, setEachEntry3] = useState(initialInputState);
    const [eachEntry4, setEachEntry4] = useState(initialInputState);
    const [eachEntry5, setEachEntry5] = useState(initialInputState);
    const [eachEntry6, setEachEntry6] = useState(initialInputState);
    const [eachEntry7, setEachEntry7] = useState(initialInputState);
    const [eachEntry8, setEachEntry8] = useState(initialInputState);
    const [eachEntry9, setEachEntry9] = useState(initialInputState);
    const [eachEntry10, setEachEntry10] = useState(initialInputState);
    const [eachEntry11, setEachEntry11] = useState(initialInputState);
    const [eachEntry12, setEachEntry12] = useState(initialInputState);
    const [eachEntry13, setEachEntry13] = useState(initialInputState);
    const [eachEntry14, setEachEntry14] = useState(initialInputState);
    const [eachEntry15, setEachEntry15] = useState(initialInputState);
    const [eachEntry16, setEachEntry16] = useState(initialInputState);
    // const [eachEntry17, setEachEntry17] = useState(initialInputState);

    const {employeeFname} = eachEntry;
    const {employeeMname} = eachEntry2;
    const {employeeLname} = eachEntry3;
    const {employeeEmail} = eachEntry4;
    const {password} = eachEntry5;
    const {employeeContact} = eachEntry6;
    const {employeeDoj} = eachEntry7;
    const {employeeAddress} = eachEntry8;
    const {cityId} = eachEntry9;
    const {panNo} = eachEntry10;
    const {panCopy} = eachEntry11;
    const {qualifications} = eachEntry12;
    const {experiance} = eachEntry13;
    const {bankAcNo} = eachEntry14;
    const {bankIfsccode} = eachEntry15;
    const {bankHolderName} = eachEntry16;
    // const {gradeId} = eachEntry17;

    useEffect(() => {  
        const GetData = async () => {  
          const result = await Axios(process.env.REACT_APP_API+"EmployeeAPI/"+params.id);  
          setEachEntry(result.data);
          setEachEntry2(result.data);
          setEachEntry3(result.data);
          setEachEntry4(result.data);
          setEachEntry5(result.data);
          setEachEntry6(result.data);
          setEachEntry7(result.data);
          setEachEntry8(result.data);
          setEachEntry9(result.data);
          setEachEntry10(result.data);
          setEachEntry11(result.data);
          setEachEntry12(result.data);
          setEachEntry13(result.data);
          setEachEntry14(result.data);
          setEachEntry15(result.data);
          setEachEntry16(result.data);
          console.log(result.data);
        };  
        GetData();  
      }, []);

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
        setEachEntry3({ ...eachEntry3, [e.target.name]: e.target.value });
        setEachEntry4({...eachEntry4,[e.target.name]: e.target.value});
        setEachEntry5({ ...eachEntry5, [e.target.name]: e.target.value });
        setEachEntry6({...eachEntry6,[e.target.name]: e.target.value});
        setEachEntry7({ ...eachEntry7, [e.target.name]: e.target.value });
        setEachEntry8({...eachEntry8,[e.target.name]: e.target.value});
        setEachEntry9({ ...eachEntry9, [e.target.name]: e.target.value });
        setEachEntry10({...eachEntry10,[e.target.name]: e.target.value});
        setEachEntry11({ ...eachEntry11, [e.target.name]: e.target.value });
        setEachEntry12({...eachEntry12,[e.target.name]: e.target.value});
        setEachEntry13({ ...eachEntry13, [e.target.name]: e.target.value });
        setEachEntry14({...eachEntry14,[e.target.name]: e.target.value});
        setEachEntry15({ ...eachEntry15, [e.target.name]: e.target.value });
        setEachEntry16({...eachEntry16,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        e.preventDefault();
        // debugger;
        const data = {
            employeeId: parseInt(params.id),
            employeeFname: eachEntry.employeeFname,
            employeeMname: eachEntry2.employeeMname,
            employeeLname: eachEntry3.employeeLname,
            employeeEmail: eachEntry4.employeeEmail,
            password: eachEntry5.password,
            employeeContact: eachEntry6.employeeContact,
            employeeDoj: eachEntry7.employeeDoj,
            employeeAddress: eachEntry8.employeeAddress,
            cityId: parseInt(eachEntry9.cityId),
            panNo: eachEntry10.panNo,
            panCopy: eachEntry11.panCopy,
            qualifications: eachEntry12.qualifications,
            experiance: parseInt(eachEntry13.experiance),
            bankAcNo: eachEntry14.bankAcNo,
            bankIfsccode: eachEntry15.bankIfsccode,
            bankHolderName: eachEntry16.bankHolderName
        }
        Axios.put(process.env.REACT_APP_API+"EmployeeAPI/"+params.id,data).then(navigate("/ViewEmployees"));
        console.log(eachEntry);
      };
    console.log(eachEntry);
    
    return(
        <div>
            <Helmet>
                    <title>HRMS | Update Employee</title>
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
                                    <h4 className="mb-0 font-size-18">Update Employee</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Employees</a></li>
                                            <li className="breadcrumb-item active">Update Employee</li>
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
                                        <h4 className="card-title mb-4">Update Employee</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewEmployees" className="btn btn-sm btn btn-warning w-md">View Employees</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">First Name</label>
                                                        <input type="text"  onChange={handleInputChange} className="form-control" name="employeeFname" value={employeeFname} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Middle Name</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="employeeMname" value={employeeMname} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Last Name</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="employeeLname" value={employeeLname} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                {/* <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Date of Joining.</label>
                                                        <input type="date" className="form-control" name="employeeDoj" value={employeeDoj} id="formrow-firstname-input"/>
                                                    </div>
                                                </div> */}
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Contact</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="employeeContact" value={employeeContact} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Email</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="employeeEmail" value={employeeEmail} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Password</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="password" value={password} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Date of Joining</label>
                                                        <input type="date" onChange={handleInputChange} className="form-control" name="employeeDoj" value={employeeDoj} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Address</label>
                                                        <textarea className="form-control" onChange={handleInputChange} name="employeeAddress" value={employeeAddress} id="formrow-firstname-input"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">City</label>
                                                        <select name="cityId" value={cityId} className="form-control" onChange={handleInputChange}>
                                                        <option>--Select City--</option>
                                                            {data.map(item => {  
                                                                return <option value={item.cityId}>{item.cityName}</option>
                                                            })} 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Qualifications</label>
                                                        <textarea className="form-control" onChange={handleInputChange} name="qualifications" value={qualifications} id="formrow-firstname-input"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Experiance</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="experiance" value={experiance} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Bank Account number</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="bankAcNo" value={bankAcNo} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">IFSC Code</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="bankIfsccode" value={bankIfsccode} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Account Holder Name</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="bankHolderName" value={bankHolderName} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">PAN Card Number</label>
                                                        <input type="text" onChange={handleInputChange} className="form-control" name="panNo" value={panNo} id="formrow-firstname-input"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">PAN Card Copy</label>
                                                        <input type="file" onChange={handleInputChange} className="form-control" name="panCopy" value={panCopy} id="formrow-firstname-input"/>
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

export default AddEmployee;