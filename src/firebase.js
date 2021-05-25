import  firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "adopt--a--pet.firebaseapp.com",
    projectId: "adopt--a--pet",
    storageBucket: "adopt--a--pet.appspot.com",
    messagingSenderId: "615174698854",
    appId: "1:615174698854:web:7ef0777672a57a86f4faa7"
};
firebase.initializeApp(config);
firebase.firestore();
export default firebase;