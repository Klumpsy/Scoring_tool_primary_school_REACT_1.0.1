import React from 'react'
import "./maindashboard.css";

//Components
import "../../components/StudentList/Studentlist";
import Studentlist from '../../components/StudentList/Studentlist';
import RapportMakeTool from '../../components/RapportMakeTool/RapportMakeTool';
import Modal from "../../components/Modal/Modal";

//Redux
import { useSelector } from "react-redux";
import { modalState } from "../../redux/reducers/rapportModalSlice";

function MainDashboard() {
    const modalActive = useSelector(modalState);

    return (
        <div className="dashboard-main-wrapper">
            {modalActive && <Modal />}
            <div className="rapport-main-info">
                <Studentlist />
                <RapportMakeTool />
            </div>
        </div>

    )
}

export default MainDashboard