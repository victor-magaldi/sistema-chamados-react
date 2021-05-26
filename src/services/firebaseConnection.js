import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHS8I0wX0cNqVgghXvO6NT2q9PZFvRdWA",
  authDomain: "sistema-chamados-437c6.firebaseapp.com",
  projectId: "sistema-chamados-437c6",
  storageBucket: "sistema-chamados-437c6.appspot.com",
  messagingSenderId: "844430284732",
  appId: "1:844430284732:web:7fefcc57572851eecbfdb9",
  measurementId: "G-LHMCBGQ0N7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
