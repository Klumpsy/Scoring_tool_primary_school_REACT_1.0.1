import React from 'react'
import { FaRegEye } from "react-icons/fa";
import "./previewButton.css"
import { useDispatch } from "react-redux";
import { searchStudent } from "../../redux/reducers/studentsSlice";
import { Link } from 'react-router-dom';

function PreviewButton() {
    const dispatch = useDispatch();

    return (
        <>
            <Link to="/Rapport" onClick={() => dispatch(searchStudent(""))}>
                <FaRegEye
                    size={35}
                    className="preview-button"
                />
            </Link>
        </>
    )
}

export default PreviewButton