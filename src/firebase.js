// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAq6NN843ts6xZMT2Uydt6LMhBKisTXNe4",
//   authDomain: "portfolio-6adeb.firebaseapp.com",
//   projectId: "portfolio-6adeb",
//   storageBucket: "portfolio-6adeb.firebasestorage.app",
//   messagingSenderId: "510857937725",
//   appId: "1:510857937725:web:27a2d308371e5bae54fb54",
//   measurementId: "G-2M0D8JPCVJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq6NN843ts6xZMT2Uydt6LMhBKisTXNe4",
  authDomain: "portfolio-6adeb.firebaseapp.com",
  projectId: "portfolio-6adeb",
  storageBucket: "portfolio-6adeb.firebasestorage.app",
  messagingSenderId: "510857937725",
  appId: "1:510857937725:web:27a2d308371e5bae54fb54",
  measurementId: "G-2M0D8JPCVJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
