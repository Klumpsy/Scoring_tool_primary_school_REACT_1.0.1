import React from 'react'
import { AiFillSave } from "react-icons/ai";
import "./savebutton.css"
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../redux/reducers/updateStudentSlice";
import { selectedStudent } from "../../redux/reducers/studentsSlice";

function SaveButton() {
    const dispatch = useDispatch();
    const student = useSelector(selectedStudent)
    return (
        <>
            <AiFillSave
                size={35}
                className="save-button"
                onClick={() => dispatch(updateStudent(student))}
            />
        </>
    )
}

export default SaveButton
