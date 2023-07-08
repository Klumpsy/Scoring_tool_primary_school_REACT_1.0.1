import React from 'react'
import "./studentFilter.css"
import FilterItem from './FilterItem/FilterItem';

//Components
import AddStudent from "../StudentList/addStudentButton/AddStudent";

//Redux
import { useDispatch } from "react-redux";
import { searchStudent } from "../../redux/reducers/studentsSlice";

function StudentFilter() {
    const dispatch = useDispatch();

    const filters = ['3', '4', '5', '6', '7', '8', "none"]
    const clusterFilters = ['BijenKorf', 'VlinderTuin', 'UilenNest'];

    return (
        <div className="checkbox-filter-wrapper">
            <div className="search-filter-button-container">
                <input
                    type="text"
                    placeholder="Zoek leerling"
                    onChange={(e) => dispatch(searchStudent(e.target.value))}
                />
                <AddStudent />
            </div>
            <div className="checkbox-filters">
                {filters.map(filter => (
                    <FilterItem
                        filterType={filter}
                        key={`FilterKey${filter}`}
                    />
                ))}
            </div>
            <div className="checkbox-filters">
                {clusterFilters.map(filter => (
                    <FilterItem
                        filterType={filter}
                        key={`FilterKey${filter}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default StudentFilter
