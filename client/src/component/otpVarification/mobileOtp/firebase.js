import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDYtFjSfR2YMtyyGmyvSe-8PFM_haIS0ho",
  authDomain: "career-builder-solution.firebaseapp.com",
  projectId: "career-builder-solution",
  storageBucket: "career-builder-solution.appspot.com",
  messagingSenderId: "646945436613",
  appId: "1:646945436613:web:1bfb59210eee241faf91ac"
  // apiKey: "AIzaSyAHVT2iHBd9nY7xd_9VvivV6o9yno_8r04",
  // authDomain: "carreerlogin.firebaseapp.com",
  // projectId: "carreerlogin",
  // storageBucket: "carreerlogin.appspot.com",
  // messagingSenderId: "132511351430",
  // appId: "1:132511351430:web:6901fca8da52b4cb934707",
  // measurementId: "G-S4VFH04V4P"
  
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase,};