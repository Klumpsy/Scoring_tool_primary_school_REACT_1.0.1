import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import "./studentlist.css";

//Components
import StudentButton from './StudentButton/StudentButton';
import StudentFilter from '../StudentFilter/StudentFilter';
//Firebase 
import { database } from '../../firebaseFunctions/firebase';
//Redux 
import { useDispatch, useSelector } from "react-redux";
import { saveStudentList } from "../../redux/reducers/studentsSlice";
import selectedCategory from "../../redux/reducers/studentsSlice";

function Studentlist() {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.students.students);
    const filterCategory = useSelector((state) => state.students.selectedCategory)

    console.log(filterCategory)

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
            <StudentFilter />
            {
                students.filter(student => {
                    if (filterCategory === "none") return true
                    return filterCategory == student.studentGroup
                }).map(student => (
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
