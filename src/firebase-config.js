import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCAzKGScKuo8vYOx8_SD_t1eY7f7Ih2sHc",
  authDomain: "where-s-waldo-a3e82.firebaseapp.com",
  projectId: "where-s-waldo-a3e82",
  storageBucket: "where-s-waldo-a3e82.appspot.com",
  messagingSenderId: "433871016424",
  appId: "1:433871016424:web:a2abf0dacbadaa2398545d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

//const timestamp = firestore.FieldValue.serverTimestamp();

export { db };
export default app;

