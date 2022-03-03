import React from 'react'
import "./studentSnappet.css"

import SliderKnob from './SliderKnob/SliderKnob'

function StudentSnappet({ student }) {
    return (
        <div className="page-break snappet-scores">
            <h2>Groei & Niveau</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Vakken</th>
                        <th>Rapport 1</th>
                        <th>Rapport 2</th>
                    </tr>
                    <tr>
                        <td>Rekenen</td>
                        <td>
                            <p>{student.rekenenSnappet}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={0} />
                            </div>
                        </td>
                        <td>
                            <p>{student.rekenenSnappet2}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={1} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Taal</td>
                        <td>
                            <p>{student.taalSnappet}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={2} />
                            </div>
                        </td>
                        <td>
                            <p>{student.taalSnappet2}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={3} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Spelling</td>
                        <td>
                            <p>{student.spellingSnappet}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={4} />
                            </div>
                        </td>
                        <td>
                            <p>{student.spellingSnappet2}</p>
                            <div className="slider-line">
                                <SliderKnob student={student} number={5} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentSnappet