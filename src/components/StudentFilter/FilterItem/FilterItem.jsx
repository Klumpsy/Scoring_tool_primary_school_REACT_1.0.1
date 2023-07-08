import React from 'react'
import "./filterItem.css"

import { useDispatch, useSelector } from "react-redux";
import { filterStudents, selectedCategory } from "../../../redux/reducers/studentsSlice";

function FilterItem({ filterType }) {
    const dispatch = useDispatch();
    const category = useSelector(selectedCategory);

    return (
        <div
            className={category === filterType ? "selected-filter filter" : "filter"}
            onClick={() => dispatch(filterStudents(filterType))}
        >
            {filterType}
        </div>
    )
}

export default FilterItem;





