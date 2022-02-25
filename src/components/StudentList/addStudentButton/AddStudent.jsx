import React from 'react'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import "./addStudent.css"

//Redux
import { useDispatch } from "react-redux";
import { createStudent } from "../../../redux/reducers/studentsSlice";

function AddStudent() {
    const dispatch = useDispatch()

    return (
        <>
            <AiOutlineUsergroupAdd
                size={35}
                className="add-student-button"
                onClick={() => dispatch(createStudent())}
            />
        </>
    )
}

export default AddStudent