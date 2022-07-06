import React,{useState, useEffect} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Route, Link, useNavigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios";
function UpdateGradeHR(){
    const params = useParams();

    const [allGrades, setAllGrades] = useState([]);
    const [allDesignations, setAllDesignations] = useState([]);
    const [allAllowances, setAllAllowances] = useState([]);
    const [allDeductions, setAllDeductions] = useState([]);

    const initialInputState1 = { designationId: parseInt(0), gradeId: parseInt(0) };
    const [eachEntry, setEachEntry] = useState(initialInputState1); //designationId
    const [eachEntry2, setEachEntry2] = useState(initialInputState1); //gradeId

    const initialInputState2 = { allowanceId: parseInt(0), gradeId: parseInt(0), allowanceRate: parseFloat(0) };
    const [eachEntry3, setEachEntry3] = useState(initialInputState2); //allowanceId
    const [eachEntry4, setEachEntry4] = useState(initialInputState2); //allowanceRate

    const initialInputState3 = { deductionId: parseInt(0), gradeId: parseInt(0), deductionRate: parseFloat(0) };
    const [eachEntry5, setEachEntry5] = useState(initialInputState3); //deductionId
    const [eachEntry6, setEachEntry6] = useState(initialInputState3); //deductionRate

    const {designationId} = eachEntry;
    const {gradeId} = eachEntry2;
    const {allowanceId} = eachEntry3;
    const {allowanceRate} = eachEntry4;
    const {deductionId} = eachEntry5;
    const {deductionRate} = eachEntry6;


    let navigate = useNavigate();

    const getAllGrades = () =>{
        axios  
        .get(process.env.REACT_APP_API+"GradeAPI")  
        .then((result) => {
            setAllGrades(result.data);
        })  
    }

    const getAllDesignations = () => {
        axios  
        .get(process.env.REACT_APP_API+"DesignationAPI")  
        .then(result => {setAllDesignations(result.data);})
    }

    const getAllAllowances = () => {
        axios  
        .get(process.env.REACT_APP_API+"AllowanceAPI")  
        .then(result => {setAllAllowances(result.data);})
    }

    const getAllDeductions = () => {
        axios  
        .get(process.env.REACT_APP_API+"DeductionAPI")  
        .then(result => {setAllDeductions(result.data);})
    }

    useEffect(() => { 
        const GetData = async () => {  
            const result = await axios(process.env.REACT_APP_API+"GradeAPI/HrGrade/"+params.gradeId+"/"+params.desId+"/"+params.allId+"/"+params.dedId+"/");  
            setEachEntry(result.data);
            setEachEntry2(result.data);
            setEachEntry3(result.data);
            setEachEntry4(result.data);
            setEachEntry5(result.data);
            setEachEntry6(result.data);
            console.log(result.data);
          };  
          GetData(); 
        getAllGrades();
        getAllDesignations();
        getAllAllowances();
        getAllDeductions();
    }, [] );

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        setEachEntry2({...eachEntry2,[e.target.name]: e.target.value});
        setEachEntry3({ ...eachEntry3, [e.target.name]: e.target.value });
        setEachEntry4({...eachEntry4,[e.target.name]: e.target.value});
        setEachEntry5({ ...eachEntry5, [e.target.name]: e.target.value });
        setEachEntry6({...eachEntry6,[e.target.name]: e.target.value});
    };
    console.log(eachEntry);
    return(
        <div>
            <Helmet>
                    <title>HRMS | Update Grade</title>
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
                                    <h4 className="mb-0 font-size-18">Update Grade</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Manage Grades</a></li>
                                            <li className="breadcrumb-item active">Update Grade</li>
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
                                        <h4 className="card-title mb-4">Update Grade</h4>
                                        <div className="text-sm-right">
                                            <Link to="/ViewGradesHR" className="btn btn-sm btn btn-warning w-md">View Grades</Link>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Grade</label>
                                                        <select name="gradeId" value={gradeId} onChange={handleInputChange} className="form-control">
                                                        <option>--Select Grade--</option>
                                                            {allGrades.map(item => {  
                                                                return <option value={item.gradeId}>{item.gradeName}</option>
                                                            })} 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formrow-firstname-input">Designation</label>
                                                        <select name="designationId" value={designationId} onChange={handleInputChange} className="form-control">
                                                        <option>--Select Designation--</option>
                                                            {allDesignations.map(item => {  
                                                                return <option value={item.designationId}>{item.designationName}</option>
                                                            })} 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-8">
                                                                <label htmlFor="formrow-firstname-input">Allowance</label>
                                                                <select name="allowanceId" value={allowanceId} onChange={handleInputChange} className="form-control">
                                                                <option>--Select Allowance--</option>
                                                                    {allAllowances.map(item => {  
                                                                        return <option value={item.allowanceId}>{item.allowanceName}</option>
                                                                    })} 
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <label htmlFor="formrow-firstname-input">Rate(%)</label>
                                                                <input name="allowanceRate" value={allowanceRate} onChange={handleInputChange} type="text" className="form-control" id="formrow-firstname-input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                    <div className="row">
                                                            <div className="col-sm-8">
                                                                <label htmlFor="formrow-firstname-input">Deduction</label>
                                                                <select name="deductionId" value={deductionId} onChange={handleInputChange} className="form-control">
                                                                <option>--Select Deduction--</option>
                                                                    {allDeductions.map(item => {  
                                                                        return <option value={item.deductionId}>{item.deductionName}</option>
                                                                    })} 
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <label htmlFor="formrow-firstname-input">Rate(%)</label>
                                                                <input type="text" name="deductionRate" value={deductionRate} onChange={handleInputChange} className="form-control" id="formrow-firstname-input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-primary w-md">Add</button>
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

export default UpdateGradeHR;