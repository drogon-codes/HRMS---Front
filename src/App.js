import Auth from './Pages/login';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import AddState from './Pages/add-state';
import ViewState from './Pages/view-states';
import AddCity from './Pages/add-city';
import ViewCities from './Pages/view-cities';
import UpdateState from './Pages/update-state';
import UpdateCity from './Pages/update-city';
import ViewHolidays from './Pages/view-holidays';
import AddHoliday from './Pages/add-holiday';
import UpdateHoliday from './Pages/update-holiday';
import AddDepartment from './Pages/add-department';
import ViewDepartments from './Pages/view-departments';
import UpdateDepartment from './Pages/update-department';
import ViewDesignations from './Pages/view-designations';
import AddDesignation from './Pages/add-designation';
import UpdateDesignation from './Pages/update-designation';
import ViewGrades from './Pages/view-grades';
import AddGrade from './Pages/add-grade';
import UpdateGrade from './Pages/update-grade';
import ViewAllowances from './Pages/view-allowances';
import AddAllowances from './Pages/add-allowance';
import UpdateAllowance from './Pages/update-allowance';
import AddAllowance from './Pages/add-allowance';
import ViewDeductions from './Pages/view-deductions';
import AddDeduction from './Pages/add-deduction';
import UpdateDeduction from './Pages/update-deduction';
import AddGradeHR from './Pages/add-hrgrade';
import ViewGradesHR from './Pages/view-hrgrade';
import UpdateGradeHR from './Pages/update-hrgrade';
import AddEmployee from './Pages/add-employee';
import ViewEmployees from './Pages/view-employees';
import UpdateEmployee from './Pages/update-employee';
import ViewLeaves from './Pages/view-leaves';
import ViewAttendance from './Pages/view-attendance';
import ViewPromotions from './Pages/view-promotions';
import ViewSalary from './Pages/view-salary';
import ViewEmployeeGrade from './Pages/view-employeegrade';
import AddEmployeeGrade from './Pages/add-employeegrade';
import UpdateEmployeeGrade from './Pages/update-employeegrade';
import AddSalary from './Pages/add-salary';
import ViewGradeDetails from './Pages/view-hrgradedetail';
import Salary from './Pages/salary';
import AddPromotion from './Pages/add-promotion';
// import logo from './logo.svg';
// import './App.css';
function App() {
  let navigate = useNavigate();
  return (
    <div className='App'>
      <Routes>
        {/* Auth and Dashboard */}
        <Route path="/" element={<Auth />} />
      </Routes>
      {sessionStorage.getItem("isLogin")=="Yes" ? 
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* OD Routes */}
        {/* States */}
        <Route path="/AddState" element={<AddState />} />
        <Route path="/ViewStates" element={<ViewState/>}/>
        <Route path="/UpdateState/:id" element={<UpdateState/>}/>
        {/* Cities */}
        <Route path="/AddCity" element={<AddCity/>}/>
        <Route path="/ViewCities" element={<ViewCities/>}/>
        <Route path="/UpdateCity/:id" element={<UpdateCity/>}/>
        {/* Holidays */}
        <Route path="/AddHoliday" element={<AddHoliday/>}/>
        <Route path="/ViewHolidays" element={<ViewHolidays/>}/>
        <Route path='/UpdateHoliday/:id' element={<UpdateHoliday/>}/>
        {/* Departments */}
        <Route path="/AddDepartment" element={<AddDepartment/>}/>
        <Route path="/ViewDepartments" element={<ViewDepartments/>}/>
        <Route path='/UpdateDepartment/:id' element={<UpdateDepartment/>}/>
        {/* Designations */}
        <Route path="/AddDesignation" element={<AddDesignation/>}/>
        <Route path="/ViewDesignations" element={<ViewDesignations/>}/>
        <Route path='/UpdateDesignation/:id' element={<UpdateDesignation/>}/>
        {/* Grades */}
        <Route path="/AddGrade" element={<AddGrade/>}/>
        <Route path="/ViewGrades" element={<ViewGrades/>}/>
        <Route path='/UpdateGrade/:id' element={<UpdateGrade/>}/>
        {/* Allowances */}
        <Route path="/AddAllowance" element={<AddAllowance/>}/>
        <Route path="/ViewAllowances" element={<ViewAllowances/>}/>
        <Route path='/UpdateAllowance/:id' element={<UpdateAllowance/>}/>
        {/* Deductions */}
        <Route path="/AddDeduction" element={<AddDeduction/>}/>
        <Route path="/ViewDeductions" element={<ViewDeductions/>}/>
        <Route path='/UpdateDeduction/:id' element={<UpdateDeduction/>}/>

        {/* HR Routes */}
        {/* Grades */}
        <Route path="/AddGradeHR" element={<AddGradeHR/>}/>
        <Route path="/ViewGradesHR" element={<ViewGradesHR/>}/>
        <Route path='/UpdateGradeHR/:gradeId/:desId/:allId/:dedId' element={<UpdateGradeHR/>}/>
        <Route path='/ViewGradeDetails/:gradeId' element={<ViewGradeDetails/>}/>
        
        {/* Employees */}
        <Route path="/ViewEmployees" element={<ViewEmployees/>}/>
        <Route path="/AddEmployee" element={<AddEmployee/>}/>
        <Route path="/UpdateEmployee/:id" element={<UpdateEmployee/>}/>

        <Route path="/ViewEmployeeGrade" element={<ViewEmployeeGrade/>}/>
        <Route path="/AddEmployeeGrade" element={<AddEmployeeGrade/>}/>
        <Route path="/UpdateEmployeeGrade/:id" element={<UpdateEmployeeGrade/>}/>

        <Route path="/ViewLeaves" element={<ViewLeaves/>}/>
        {/* Attendance */} 
        <Route path="/ViewAttendance" element={<ViewAttendance/>}/>
        {/* Promotions */}
        <Route path="/ViewPromotions" element={<ViewPromotions/>}/>
        <Route path="/AddPromotion/:id" element={<AddPromotion/>}/>
        {/* Salary */}
        <Route path="/ViewSalaries" element={<ViewSalary/>}/>
        <Route path="/AddSalary" element={<AddSalary/>}/>
        <Route path="/Salary/:employeeId" element={<Salary/>}/>
      </Routes>
      :
      alert("Please Login")
      }
    </div>
  );
}

export default App;
