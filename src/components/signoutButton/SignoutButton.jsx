import React from 'react'
import "./signoutButton.css";

//Firebase
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseFunctions/firebase";

//Redux
import { useDispatch } from "react-redux";
import { logoutTeacher } from "../../redux/reducers/loggedTeacherSlice"

function SignoutButton() {
    const dispatch = useDispatch();

    const logout = () => {
        try {
            signOut(auth);
        } catch {
            console.log("You cannot logout")
        }
    }

    const handleSignOut = () => {
        logout(auth);
        dispatch(logoutTeacher());
    }

    return (
        <>
            <button
                className="logout-button"
                onClick={handleSignOut}
            >
                Logout
            </button>
        </>
    )
}

export default SignoutButton

