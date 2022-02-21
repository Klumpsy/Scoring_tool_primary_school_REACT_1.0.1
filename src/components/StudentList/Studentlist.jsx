import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import "./studentlist.css";

//Components
import StudentButton from './StudentButton/StudentButton';
//Firebase 
import { database } from '../../firebaseFunctions/firebase';
//Redux 
import { useDispatch, useSelector } from "react-redux";
import { saveStudentList } from "../../redux/reducers/studentsSlice";
import getStudentList from "../../redux/reducers/studentsSlice";

function Studentlist() {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.students);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const databaseRef = ref(database, "Rapporten");
            onValue(databaseRef, (snapshot) => {
                const data = snapshot.val()
                const formattedData = Object.values(data)
                setStudents(formattedData)
                dispatch(saveStudentList(formattedData))
            })
        }
        getStudents()
    }, [])

    return (
        <div className="student-list-wrapper">
            {
                students.map(student => (
                    <StudentButton
                        name={student.studentName}
                        group={student.studentGroup}
                        key={student.studentName}
                    />
                ))
            }
        </div>
    )
}

export default Studentlist
