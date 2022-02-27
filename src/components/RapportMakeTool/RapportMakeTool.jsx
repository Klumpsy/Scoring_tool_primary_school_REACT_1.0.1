import React, { useEffect, useState } from 'react'
import "./rapportMakeTool.css"

//components 
import DiaScores from "./DiaScores/DiaScores";
import PersonalMessages from ".//PersonalMessages/PersonalMessages";
import SnappetScores from './SnappetScores/SnappetScores';
import SnappetSliders from './SnappetSliders/SnappetSliders';
import SnappetGoals from './SnappetGoals/SnappetGoals';
import Research from './Research/Research';
import SaveButton from '../SaveButton/SaveButton';
import PreviewButton from '../PreviewButton/PreviewButton';

//Redux
import { useSelector } from "react-redux";
import { selectedStudent } from "../../redux/reducers/studentsSlice";

function RapportMakeTool() {
    const activeStudent = useSelector(selectedStudent)

    return (
        <div className="rapport-info-wrapper">
            <div className="title-button-container">
                <PreviewButton />
                <h2 className="rapport-name">{activeStudent?.studentName}</h2>
                <SaveButton />
            </div>
            <div className="rapport-make-tool-wrapper">
                <PersonalMessages activeStudent={activeStudent} />
                <DiaScores activeStudent={activeStudent} />
                <SnappetScores activeStudent={activeStudent} />
                <SnappetSliders activeStudent={activeStudent} />
                <SnappetGoals activeStudent={activeStudent} />
                <Research activeStudent={activeStudent} />
            </div>
        </div>

    )
}

export default RapportMakeTool