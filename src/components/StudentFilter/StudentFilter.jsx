import React from 'react'
import "./studentFilter.css"
import FilterItem from './FilterItem/FilterItem';

function StudentFilter() {

    const filters = [3, 4, 5, 6, 7, 8, "none"]

    return (
        <div className="checkbox-filter-wrapper">
            <input type="text" placeholder="Zoek leerling" />
            <div className="checkbox-filters">
                {filters.map(filter => (
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