import React from 'react'
import "./studentAutograph.css"

function StudentAutograph({ student }) {
    return (
        <div className="end-page-wrapper">
            <div className={student.studentGroup == 3 || student.studentGroup == 4 ? "page-break autograph-container" : "autograph-container"}>
                <div>
                    <h2>Rapport 1</h2>
                    <h3>Leerkracht</h3>
                    <div className="autograph"></div>
                    <h3>Ouder(s)</h3>
                    <div className="autograph"></div>
                </div>

                <div>
                    <h2>Rapport 2</h2>
                    <h3>Leerkracht</h3>
                    <div className="autograph"></div>
                    <h3>Ouder(s)</h3>
                    <div className="autograph"></div>
                </div>
            </div>
            <div className="next-group-wrapper">
                <h3>Volgende groep</h3>
                <div className="next-group"></div>
            </div>
        </div>
    )
}

export default StudentAutograph