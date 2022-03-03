import React from 'react'

import "./studentResearch.css"

//Components
import ListItem from "./ListItem/ListItem";

function StudentResearch({ student }) {
    return (
        <div className="page-break research-items">
            <h2>Onderzoeken & presenteren</h2>
            <ListItem item={student.werkstukken} title="Werkstukken" />
            <ListItem item={student.boekbesprekingen} title="Boekbespreking" />
            <ListItem item={student.spreekbeurten} title="Spreekbeurt" />
            <ListItem item={student.levelwork} title="Levelwerk" />
            <ListItem item={student.projects} title="Projecten" />
        </div>
    )
}

export default StudentResearch