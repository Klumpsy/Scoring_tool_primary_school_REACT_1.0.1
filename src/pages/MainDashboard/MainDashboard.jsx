import React from 'react'

import { useSelector } from "react-redux";
import { loggedTeacher } from "../../redux/reducers/loggedTeacherSlice";

import { logout } from '../../firebaseFunctions/auth';

function MainDashboard() {
    const teacher = useSelector(loggedTeacher);
    return (
        <>
            <div>Hello {teacher.loggedTeacher}</div>
            <button onClick={logout}>LogOut</button>
        </>

    )
}

export default MainDashboard