// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8suSYgXAw_1l4dOtema9GIo2Mdc3CxoU",
  authDomain: "react-57765.firebaseapp.com",
  projectId: "react-57765",
  storageBucket: "react-57765.appspot.com",
  messagingSenderId: "409287085766",
  appId: "1:409287085766:web:8335db97c822068f49d1c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)