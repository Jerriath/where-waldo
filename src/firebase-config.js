import firebase from "firebase/compat/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCAzKGScKuo8vYOx8_SD_t1eY7f7Ih2sHc",
  authDomain: "where-s-waldo-a3e82.firebaseapp.com",
  projectId: "where-s-waldo-a3e82",
  storageBucket: "where-s-waldo-a3e82.appspot.com",
  messagingSenderId: "433871016424",
  appId: "1:433871016424:web:a2abf0dacbadaa2398545d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

const firestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { firestore, timestamp };
export default firebase;


//Firestore currently does not work. Gotta fix!!!