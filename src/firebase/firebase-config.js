import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAanjmHy5DDTNrrxPBcdRc_FjJf7v--C1U",
    authDomain: "react-app-curso-97bf2.firebaseapp.com",
    projectId: "react-app-curso-97bf2",
    storageBucket: "react-app-curso-97bf2.appspot.com",
    messagingSenderId: "864000343087",
    appId: "1:864000343087:web:541db3655dddc7bebe9ada"
  };

  firebase.initializeApp(firebaseConfig);
//Estoy usando la version 8.10 de firebase 

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}