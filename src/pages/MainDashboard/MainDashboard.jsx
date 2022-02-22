import React from 'react'
import "./maindashboard.css";

//Components
import "../../components/StudentList/Studentlist";
import Studentlist from '../../components/StudentList/Studentlist';
import RapportMakeTool from '../../components/RapportMakeTool/RapportMakeTool';

function MainDashboard() {

    return (
        <div className="dashboard-main-wrapper">
            <div className="rapport-main-info">
                <Studentlist />
                <RapportMakeTool />
            </div>
        </div>

    )
}

export default MainDashboard