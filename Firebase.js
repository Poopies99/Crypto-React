// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgXt4aOfCQ4BgFxdFnCCnBx3mPXF2Kpyk",
  authDomain: "cryptoworld-react.firebaseapp.com",
  projectId: "cryptoworld-react",
  storageBucket: "cryptoworld-react.appspot.com",
  messagingSenderId: "36037530631",
  appId: "1:36037530631:web:ce6ee41001f540465506a2",
  measurementId: "G-LBBNWZ6T23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);