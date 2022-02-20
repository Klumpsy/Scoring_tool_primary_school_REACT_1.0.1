import {signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth"; 
import {rapportApp} from "./firebase";

//Login function 
export const login = async (email, password) => { 
    try { 
        await signInWithEmailAndPassword(auth, email, password); 

    } catch (err) { 
        alert(err.message)
    }
}

//Logout function 
export const logout = () => { 
    signOut(auth); 
}

//Auth
export const auth = getAuth(rapportApp); 