import React from 'react'
import { FaRegEye } from "react-icons/fa";
import "./previewButton.css"

function PreviewButton() {
    return (
        <>
            <FaRegEye
                size={35}
                className="preview-button"
            />
        </>
    )
}

export default PreviewButton