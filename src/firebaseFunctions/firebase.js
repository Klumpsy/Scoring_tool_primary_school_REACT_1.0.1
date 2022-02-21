import {initializeApp} from "firebase/app"; 
import {getDatabase} from "firebase/database"; 
import {getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  };

export const rapportApp = initializeApp(firebaseConfig); 

//Database
export const database = getDatabase(rapportApp); 

export const auth = getAuth(rapportApp);
