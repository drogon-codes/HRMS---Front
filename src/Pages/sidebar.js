import React from "react";
import { Route, Link } from 'react-router-dom';
function Sidebar(){
        return(
            <div>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">

                        <div id="sidebar-menu" align="left">
                            {/* OD Menus */}
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" key="t-menu">Organization Designer Tools</li>

                                <li>
                                    <Link to="/ViewStates" className="waves-effect">
                                        <i className="bx bx-map-pin"></i>
                                        <span key="t-dashboards">States</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewCities" className="waves-effect">
                                        <i className="bx bx-map"></i>
                                        <span key="t-dashboards">Cities</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewHolidays" className="waves-effect">
                                        <i className="bx bx-calendar"></i>
                                        <span key="t-dashboards">Holidays</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewDepartments" className="waves-effect">
                                        <i className="bx bx-building"></i>
                                        <span key="t-dashboards">Departments</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewDesignations" className="waves-effect">
                                        <i className="bx bx-pen"></i>
                                        <span key="t-dashboards">Designations</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewGrades" className="waves-effect">
                                        <i className="bx bx-user"></i>
                                        <span key="t-dashboards">Grades</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewAllowances" className="waves-effect">
                                        <i className="bx bx-money"></i>
                                        <span key="t-dashboards">Allowances</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewDeductions" className="waves-effect">
                                        <i className="bx bx-minus-circle"></i>
                                        <span key="t-dashboards">Deductions</span>
                                    </Link>
                                </li>
                            </ul>

                            {/* HRM Menus */}
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" key="t-menu">Human Resource Tools</li>

                                <li>
                                    <Link to="/ViewGradesHR" className="waves-effect">
                                        <i className="bx bx-user"></i>
                                        <span key="t-dashboards">Grades</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewEmployees" className="waves-effect">
                                        <i className="bx bx-briefcase-alt-2"></i>
                                        <span key="t-dashboards">Employees</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewLeaves" className="waves-effect">
                                        <i className="bx bx-calendar"></i>
                                        <span key="t-dashboards">Leaves</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewAttendance" className="waves-effect">
                                    <i className='bx bx-calendar-check'></i>
                                        <span key="t-dashboards">Attendance</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewPromotions" className="waves-effect">
                                        <i className="bx bx-upvote"></i>
                                        <span key="t-dashboards">Promotions</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ViewSalaries" className="waves-effect">
                                        <i className="bx bx-rupee"></i>
                                        <span key="t-dashboards">Salary</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Reports" className="waves-effect">
                                        <i className="bx bx-grid-alt"></i>
                                        <span key="t-dashboards">Reports</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Sidebar;