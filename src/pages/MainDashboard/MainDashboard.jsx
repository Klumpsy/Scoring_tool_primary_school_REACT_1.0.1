import React from 'react'
import "./maindashboard.css";

//Components
import "../../components/StudentList/Studentlist";
import Studentlist from '../../components/StudentList/Studentlist';

function MainDashboard() {

    return (
        <div className="dashboard-main-wrapper">
            <h1>Main Dashboard</h1>
            <Studentlist />
        </div>

    )
}

export default MainDashboard