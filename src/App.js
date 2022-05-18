import Auth from './Pages/login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import AddState from './Pages/add-state';
import ViewState from './Pages/view-states';
import AddCity from './Pages/add-city';
import ViewCities from './Pages/view-cities';
// import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddState" element={<AddState />} />
        <Route path="/ViewStates" element={<ViewState/>}/>
        <Route path="/AddCity" element={<AddCity/>}/>
        <Route path="/ViewCities" element={<ViewCities/>}/>
      </Routes>
    </div>
  );
}

export default App;
