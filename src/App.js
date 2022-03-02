import './App.css';

//React router
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 

//Components
import Login from './pages/LoginPage/LoginPage';
import MainDashboard from "./pages/MainDashboard/MainDashboard"
import Rapport from './pages/Rapport/Rapport';
import Navbar from './pages/Navbar/Navbar';

//Redux
import {useSelector } from "react-redux";
import {loggedTeacher} from "./redux/reducers/loggedTeacherSlice";

function App() {
  const teacher = useSelector(loggedTeacher); 

  return (
    <BrowserRouter>
     
        <div className="app">
          {
            teacher ?
            <>
            <Navbar/>
            <Routes>
              <Route path = "/" element = {<MainDashboard/>}/>
              <Route path = "Rapport" element = {<Rapport/>}/>
            </Routes>
            </>
            :
            <Login/>
          }
        </div>
    </BrowserRouter>
  );
}

export default App;
