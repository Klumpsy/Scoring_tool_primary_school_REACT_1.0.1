import React from 'react'
import "./studentSnappet.css"

import { FaMapMarker } from "react-icons/fa";

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
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[0] * 2]}px` }}
                                />
                            </div>
                        </td>
                        <td>
                            <p>{student.rekenenSnappet2}</p>
                            <div className="slider-line">
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[1] * 2]}px` }}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Taal</td>
                        <td>
                            <p>{student.taalSnappet}</p>
                            <div className="slider-line">
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[2] * 2]}px` }}
                                />
                            </div>
                        </td>
                        <td>
                            <p>{student.taalSnappet2}</p>
                            <div className="slider-line">
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[3] * 2]}px` }}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Spelling</td>
                        <td>
                            <p>{student.spellingSnappet}</p>
                            <div className="slider-line">
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[4] * 2]}px` }}
                                />
                            </div>
                        </td>
                        <td>
                            <p>{student.spellingSnappet2}</p>
                            <div className="slider-line">
                                <FaMapMarker
                                    size={18}
                                    className="slider-knob"
                                    style={{ marginLeft: `${[student.sliderDisplay[5] * 2]}px` }}
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentSnappet