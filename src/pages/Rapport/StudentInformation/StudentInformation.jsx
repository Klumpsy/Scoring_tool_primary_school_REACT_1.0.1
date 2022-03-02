import React from 'react'
import "./studentInformation.css"

import logo from "../../../media/images/logoSprengel.png";



function StudentInformation({ student }) {

    const newYear = new Date()

    return (
        <div className="student-information-container">
            <h3>{student.studentName}</h3>
            <p>{`GROEP  ${student.studentGroup}`}</p>
            <p>{student.inputTeacher}</p>
            <p>{newYear.getFullYear()}</p>
            <img src={logo} className="image" />
        </div>
    )
}

export default StudentInformation