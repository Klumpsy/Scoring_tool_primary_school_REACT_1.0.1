import React, { useEffect } from 'react'
import "./studentButton.css";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectStudent, selectedStudent } from "../../../redux/reducers/studentsSlice";

//Icons
import { FaUserGraduate } from "react-icons/fa"

function StudentButton({ name, group, info }) {
    const dispatch = useDispatch();
    const activeStudent = useSelector(selectedStudent);

    return (
        <div className={activeStudent?.studentName == name ? "student-container selected-student-button" : "student-container"}
            onClick={() => { dispatch(selectStudent(info)) }}
        >
            <div className="student-name-container">
                <FaUserGraduate size={20} style={activeStudent?.studentName == name ? { color: "white" } : { color: "black" }} />
                <h3>{name}</h3>
            </div>
            <span className="student-group">
                {group}
            </span>
        </div>
    )
}

export default StudentButton