import React, { useEffect, useState } from 'react'
import "./rapportMakeTool.css"

//components 
import DiaScores from "./DiaScores/DiaScores";
import PersonalMessages from ".//PersonalMessages/PersonalMessages";
import SnappetScores from './SnappetScores/SnappetScores';
import SnappetSliders from './SnappetSliders/SnappetSliders';

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectedStudent } from "../../redux/reducers/studentsSlice";

function RapportMakeTool() {
    const activeStudent = useSelector(selectedStudent)

    return (
        <div className="rapport-make-tool-wrapper">
            <h2>{activeStudent?.studentName}</h2>
            <PersonalMessages activeStudent={activeStudent} />
            <DiaScores activeStudent={activeStudent} />
            <SnappetScores activeStudent={activeStudent} />
            <SnappetSliders activeStudent={activeStudent} />
        </div>
    )
}

export default RapportMakeTool