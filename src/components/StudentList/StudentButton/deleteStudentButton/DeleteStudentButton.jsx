import React, { useMemo } from 'react'
import "../studentButton.css";

//Icons
import { RiDeleteBinFill } from "react-icons/ri";

//Redux
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../../../redux/reducers/studentsSlice"

function DeleteStudentButton({ activeStudent }) {
    const dispatch = useDispatch();

    return (
        <>
            <RiDeleteBinFill
                className="delete-button"
                size={25}
                onClick={() => dispatch(deleteStudent(activeStudent))}
            />
        </>
    )
}

export default DeleteStudentButton