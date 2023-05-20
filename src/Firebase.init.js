 
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIQmrNQfXlnRNpu6rl3vO-UI2zwestAs",
  authDomain: "login-from-7585b.firebaseapp.com",
  projectId: "login-from-7585b",
  storageBucket: "login-from-7585b.appspot.com",
  messagingSenderId: "1032331050554",
  appId: "1:1032331050554:web:7f483e0c33964f99aa3f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;