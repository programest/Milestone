// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCKzcm1N2uif6NmYvJ4AeKe2Fg1lBaL_yw",
  authDomain: "milestone-5aa6e.firebaseapp.com",
  projectId: "milestone-5aa6e",
  storageBucket: "milestone-5aa6e.appspot.com",
  messagingSenderId: "1012903318853",
  appId: "1:1012903318853:web:1bcadef830e0b561db9a2c",
  measurementId: "G-8PH72Q8CC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);