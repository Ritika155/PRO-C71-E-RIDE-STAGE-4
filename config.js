import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTYlaH66Q_ZqSciRBPY54HEnO-A5VXZto",
    authDomain: "e-ride-afee6.firebaseapp.com",
    projectId: "e-ride-afee6",
    storageBucket: "e-ride-afee6.appspot.com",
    messagingSenderId: "1037794883774",
    appId: "1:1037794883774:web:898e5c56a93d3d4e9c46ef"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
