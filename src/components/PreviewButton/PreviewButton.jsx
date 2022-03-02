import React from 'react'
import { FaRegEye } from "react-icons/fa";
import "./previewButton.css"

import { Link } from 'react-router-dom';

function PreviewButton() {
    return (
        <>
            <Link to="/Rapport">
                <FaRegEye
                    size={35}
                    className="preview-button"
                />
            </Link>
        </>
    )
}

export default PreviewButton