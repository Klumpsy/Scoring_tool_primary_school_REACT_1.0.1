import './App.css';
import Login from './pages/LoginPage/LoginPage';
import MainDashboard from "./pages/MainDashboard/MainDashboard"

//Redux
import {useSelector } from "react-redux";
import {loggedTeacher} from "./redux/reducers/loggedTeacherSlice";

function App() {
  const teacher = useSelector(loggedTeacher); 

  return (
    <div className="App">
        {
          teacher.logged ?
          <MainDashboard/>
          :
          <Login/>
        }
    </div>
  );
}

export default App;
