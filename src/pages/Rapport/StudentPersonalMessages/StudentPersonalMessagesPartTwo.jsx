import React from 'react'
import "./studentPersonalMessages.css"

function StudentPersonalMessagesPartTwo({ student }) {

    return (
        <div className="page-break">
            <div>
                <h3>Sociale omgang</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalSocialSkills}
                    </div>
                    <div className="text-area">
                        {student.personalSocialSkills2 ? student.personalSocialSkills2 : ""}
                    </div>
                </div>
            </div>
            <div>
                <h3>Zelfstandigheid</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalIndependence}
                    </div>
                    <div className="text-area">
                        {student.personalIndependence2 ? student.personalIndependence2 : ""}
                    </div>
                </div>
            </div>
            <div>
                <h3>Werkhouding</h3>
                <div className="text-area-container">
                    <div className="text-area">
                        {student.personalWorkEthic}
                    </div>
                    <div className="text-area">
                        {student.personalWorkEthic2 ? student.personalWorkEthic2 : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPersonalMessagesPartTwo