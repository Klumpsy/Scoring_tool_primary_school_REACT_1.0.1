import React from 'react'
import "./studentSnappet.css"

function StudentSnappetGoals({ student }) {
    return (
        <div className="snappet-scores">
            <table>
                <tbody>
                    <tr>
                        <th>Vakken</th>
                        <th>Behaalde doelen rapport 1</th>
                        <th>Behaalde doelen rapport 2</th>
                    </tr>
                    <tr>
                        <td>Rekenen</td>
                        <td>
                            <p>{`${student.behaaldeDoelenRekenen} / ${student.doelenTotaalRekenen}`}</p>
                        </td>
                        <td>
                            <p>{`${student.behaaldeDoelenRekenen2} / ${student.doelenTotaalRekenen2}`}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Taal</td>
                        <td>
                            <p>{`${student.behaaldeDoelenTaal} / ${student.doelenTotaalTaal}`}</p>
                        </td>
                        <td>
                            <p>{`${student.behaaldeDoelenTaal2} / ${student.doelenTotaalTaal2}`}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Spelling</td>
                        <td>
                            <p>{`${student.behaaldeDoelenSpelling} / ${student.doelenTotaalSpelling}`}</p>
                        </td>
                        <td>
                            <p>{`${student.behaaldeDoelenSpelling2} / ${student.doelenTotaalSpelling2}`}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentSnappetGoals