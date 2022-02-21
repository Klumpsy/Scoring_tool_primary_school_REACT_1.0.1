import './App.css';

import Login from './pages/LoginPage/LoginPage';
import MainDashboard from "./pages/MainDashboard/MainDashboard"
import Navbar from './pages/Navbar/Navbar';

//Redux
import {useSelector } from "react-redux";
import {loggedTeacher} from "./redux/reducers/loggedTeacherSlice";

function App() {
  const teacher = useSelector(loggedTeacher); 

  return (
    <div className="app">
        {
          teacher ?
          <>
           <Navbar/>
           <MainDashboard/>
          </>
          :
          <Login/>
        }
    </div>
  );
}

export default App;
