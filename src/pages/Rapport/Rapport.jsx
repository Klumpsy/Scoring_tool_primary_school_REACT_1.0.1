import React, { useRef } from 'react'
import "./rapport.css";

//Router
import { Link } from 'react-router-dom';

//Icons
import { BiArrowBack } from "react-icons/bi";
import { BsCloudDownloadFill } from "react-icons/bs";

//Redux
import { useSelector } from "react-redux";
import { selectedStudent } from "../../redux/reducers/studentsSlice";

//PDF API 
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

//Rapport Components
import StudentInformation from './StudentInformation/StudentInformation';
import StudentPersonalMessagesPartOne from './StudentPersonalMessages/StudentPersonalMessagesPartOne';
import StudentPersonalMessagesPartTwo from './StudentPersonalMessages/StudentPersonalMessagesPartTwo';
import StudentSnappet from "./StudentSnappet/StudentSnappet";
import StudentSnappetGoals from "./StudentSnappet/StudentSnappetGoals";
import StudentDia from './StudentSnappet/StudentDia';
import StudentResearch from './StudentResearch/StudentResearch';
import StudentAutograph from './StudentAuthgraph/StudentAutograph';

function Rapport() {
    const student = useSelector(selectedStudent)
    const pdfExportComponent = useRef(null);

    const downloadFile = () => {
        pdfExportComponent.current.save();
    }

    const date = new Date();

    return (
        <div className="rapport-container">
            <div className="button-container">
                <Link to="/">
                    <BiArrowBack
                        size={40}
                        className="back-button"
                    />
                </Link>
                <BsCloudDownloadFill
                    size={40}
                    className="download-button"
                    onClick={downloadFile}
                />
            </div>
            <h1>{student.studentName}</h1>
            <PDFExport
                className="rapport"
                ref={pdfExportComponent}
                paperSize="A4"
                scale={0.6}
                forcePageBreak=".page-break"
                fileName={`${student.studentName}_${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}
            >
                <StudentInformation student={student} />
                <StudentPersonalMessagesPartOne student={student} />
                <StudentPersonalMessagesPartTwo student={student} />
                <StudentSnappet student={student} />
                <StudentSnappetGoals student={student} />
                <StudentDia student={student} />
                {student.studentGroup == 3 || student.studentGroup == 4 ?
                    ""
                    :
                    <StudentResearch student={student} />
                }
                <StudentAutograph student={student} />
            </PDFExport>
        </div>
    )
}

export default Rapport