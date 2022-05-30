import Auth from './Pages/login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
// import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Auth and Dashboard */}
        <Route path="/" element={<Auth />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* OD Routes */}
        {/* States */}
        <Route path="/AddState" element={<AddState />} />
        <Route path="/ViewStates" element={<ViewState/>}/>
        <Route path="/UpdateState/:id" element={<UpdateState/>}/>
        {/* Cities */}
        <Route path="/AddCity" element={<AddCity/>}/>
        <Route path="/ViewCities" element={<ViewCities/>}/>
        <Route path="/UpdateCity" element={<UpdateCity/>}/>
        {/* Holidays */}
        <Route path="/AddHoliday" element={<AddHoliday/>}/>
        <Route path="/ViewHolidays" element={<ViewHolidays/>}/>
        <Route path='/UpdateHoliday' element={<UpdateHoliday/>}/>
        {/* Departments */}
        <Route path="/AddDepartment" element={<AddDepartment/>}/>
        <Route path="/ViewDepartments" element={<ViewDepartments/>}/>
        <Route path='/UpdateDepartment' element={<UpdateDepartment/>}/>
        {/* Designations */}
        <Route path="/AddDesignation" element={<AddDesignation/>}/>
        <Route path="/ViewDesignations" element={<ViewDesignations/>}/>
        <Route path='/UpdateDesignation' element={<UpdateDesignation/>}/>
        {/* Grades */}
        <Route path="/AddGrade" element={<AddGrade/>}/>
        <Route path="/ViewGrades" element={<ViewGrades/>}/>
        <Route path='/UpdateGrade' element={<UpdateGrade/>}/>
        {/* Allowances */}
        <Route path="/AddAllowance" element={<AddAllowance/>}/>
        <Route path="/ViewAllowances" element={<ViewAllowances/>}/>
        <Route path='/UpdateAllowance' element={<UpdateAllowance/>}/>
        {/* Deductions */}
        <Route path="/AddDeduction" element={<AddDeduction/>}/>
        <Route path="/ViewDeductions" element={<ViewDeductions/>}/>
        <Route path='/UpdateDeduction' element={<UpdateDeduction/>}/>

        {/* HR Routes */}
        {/* Grades */}
        <Route path="/AddGradeHR" element={<AddGradeHR/>}/>
        <Route path="/ViewGradesHR" element={<ViewGradesHR/>}/>
        <Route path='/UpdateGradeHR' element={<UpdateGradeHR/>}/>
        {/* Employees */}
        <Route path="/AddEmployee" element={<AddEmployee/>}/>
        <Route path="/ViewEmployees" element={<ViewEmployees/>}/>
        <Route path='/UpdateEmployee' element={<UpdateEmployee/>}/>
        {/* Leaves */} 
        <Route path="/ViewLeaves" element={<ViewLeaves/>}/>
        {/* Attendance */} 
        <Route path="/ViewAttendance" element={<ViewAttendance/>}/>
        {/* Promotions */}
        <Route path="/ViewPromotions" element={<ViewPromotions/>}/>
        {/* Salary */}
        <Route path="/ViewSalaries" element={<ViewSalary/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
