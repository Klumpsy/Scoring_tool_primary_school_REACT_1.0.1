import React from 'react'
import "./studentSnappet.css"

function StudentDia({ student }) {
    return (
        <div className="snappet-scores">
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
                            <p>{student.diaRekenen}</p>
                        </td>
                        <td>
                            <p>
                                {student.diaRekenen2}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Tekst</td>
                        <td>
                            <p>{student.diaTekst}</p>
                        </td>
                        <td>
                            <p>{student.diaTekst2}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Spelling</td>
                        <td>
                            <p>{student.diaSpelling}</p>
                        </td>
                        <td>
                            <p>{student.diaSpelling2}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Woordenschat</td>
                        <td>
                            <p>{student.diaWoordenschat}</p>
                        </td>
                        <td>
                            <p>{student.diaWoordenschat2}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>AVI</td>
                        <td>
                            <p>{student.avi}</p>
                        </td>
                        <td>
                            <p>{student.avi2}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>DMT</td>
                        <td>
                            <p>{student.dmt}</p>
                        </td>
                        <td>
                            <p>{student.dmt2}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentDia
