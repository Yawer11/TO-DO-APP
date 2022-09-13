"use strict";

/* <script type="module"> */

//    Import the functions you need from the SDKs you need

////////////////////////////////////////////////////////////////////////////////////////////////
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhbrWPGdYE0hMWYrskt5dK7_6AtJLCucc",
  authDomain: "to-do-app-b2851.firebaseapp.com",
  projectId: "to-do-app-b2851",
  storageBucket: "to-do-app-b2851.appspot.com",
  messagingSenderId: "131568127048",
  appId: "1:131568127048:web:ed9d43a8a0dcb90e345c7d",
  measurementId: "G-ZJH4Q5PPY6",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/////////////////////////////////////////////////////////////////////////////////////
// </script>;

// var firebaseConfig = {
//     apiKey: "AIzaSyAI1brKkR9XfOGErHdMQKyfj8GQbKR7tXA",
//     authDomain: "to-do-list-519ae.firebaseapp.com",
//     projectId: "to-do-list-519ae",
//     storageBucket: "to-do-list-519ae.appspot.com",
//     messagingSenderId: "897143349984",
//     appId: "1:897143349984:web:e23f665d2848abc8fa2685",
//     measurementId: "G-N6YDZCPM2S"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// var db = firebase.firestore();
