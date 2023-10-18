// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOfqwMWv2Uia_NntROqejc1bZsFIut6fo",
  authDomain: "test-3a143.firebaseapp.com",
  projectId: "test-3a143",
  storageBucket: "test-3a143.appspot.com",
  messagingSenderId: "987240156390",
  appId: "1:987240156390:web:a3af67c75667e64b207f27",
  measurementId: "G-712NY8NX3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();