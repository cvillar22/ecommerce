import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
//OBJETO DE FIREBASE
    apiKey: "AIzaSyByXfvUEVhNioQmw5mjArszmcL5NyvyL3Q",
    authDomain: "frikistore-70daf.firebaseapp.com",
    projectId: "frikistore-70daf",
    storageBucket: "frikistore-70daf.appspot.com",
    messagingSenderId: "13626184623",
    appId: "1:13626184623:web:522498ee430e754855955a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

