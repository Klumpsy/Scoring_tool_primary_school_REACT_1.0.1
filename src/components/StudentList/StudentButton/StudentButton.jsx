import React from 'react'
import "./studentButton.css";

//Icons
import { FaUserGraduate } from "react-icons/fa"

function StudentButton({ name, group }) {
    return (
        <div className="student-container">'
            <div className="student-name-container">
                <FaUserGraduate size={20} />
                <h3>{name}</h3>
            </div>
            <span className="student-group">
                {group}
            </span>
        </div>
    )
}

export default StudentButton