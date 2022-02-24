import React, { useEffect, useState } from 'react';
import "./studentlist.css";

//Components
import StudentButton from './StudentButton/StudentButton';
import StudentFilter from '../StudentFilter/StudentFilter';

//Firebase
import { ref, onValue } from "firebase/database";
import { database } from "../../firebaseFunctions/firebase";

//Redux 
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, checkStudents } from "../../redux/reducers/studentsSlice";
import { selectedCategory, searchedStudent } from "../../redux/reducers/studentsSlice";

const databaseRef = ref(database, "Rapporten");

function Studentlist() {
    const dispatch = useDispatch();
    const filterCategory = useSelector(selectedCategory);
    const searchInput = useSelector(searchedStudent);
    const studentList = useSelector(checkStudents);

    useEffect(() => {
        onValue(databaseRef, (snapshot) => {
            const formattedData = Object.values(snapshot.val())
            dispatch(fetchStudents(formattedData))
        })
    }, [dispatch])

    return (
        <div className="student-list-wrapper">
            <StudentFilter />
            {
                studentList?.filter(student => {
                    if (searchInput !== "") {
                        return student.studentName.toLowerCase().includes(searchInput.toLowerCase());
                    } else {
                        if (filterCategory === "none") return true
                        return filterCategory == student.studentGroup
                    }
                }).map(student => (
                    <StudentButton
                        name={student.studentName}
                        group={student.studentGroup}
                        info={student}
                        key={student.studentName}
                    />
                ))
            }
        </div>
    )
}

export default Studentlist
