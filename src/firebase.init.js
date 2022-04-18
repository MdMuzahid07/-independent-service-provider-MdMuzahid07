// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey ,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyC6YUuSezG1zbfF-kkjmldX5oNdH-YUNDo",
//   authDomain: "fitness-gym-67a5e.firebaseapp.com",
//   projectId: "fitness-gym-67a5e",
//   storageBucket: "fitness-gym-67a5e.appspot.com",
//   messagingSenderId: "598896203117",
//   appId: "1:598896203117:web:700fa84afdc19e6069f664"