import React from 'react'
import "./navbar.css"

//Images
import mainLogo from "../../media/images/logoSprengel.png";

//Components
import SignoutButton from "../../components/signoutButton/SignoutButton";

//Redux
import { useSelector } from "react-redux";
import { loggedTeacherName } from '../../redux/reducers/loggedTeacherSlice';

function Navbar() {
    const name = useSelector(loggedTeacherName);

    return (
        <div className="navbar-wrapper">
            <img src={mainLogo} />
            <div className="navbar-logout-section">
                <h3>{name}</h3>
                <SignoutButton />
            </div>
        </div>
    )
}

export default Navbar
