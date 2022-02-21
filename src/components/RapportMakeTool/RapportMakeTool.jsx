import React, { useEffect, useState } from 'react'
import "./rapportMakeTool.css"

import { useDispatch, useSelector } from "react-redux";

function RapportMakeTool() {
    const [currentStudent, setCurrentStudent] = useState()

    return (
        <div className="rapport-make-tool-wrapper">
            <h2>current student</h2>
        </div>
    )
}

export default RapportMakeTool