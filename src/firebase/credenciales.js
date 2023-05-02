// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolbUqlPYnt6IcTIpHFSncr0ZoFMN6vco",
  authDomain: "dealer-code.firebaseapp.com",
  projectId: "dealer-code",
  storageBucket: "dealer-code.appspot.com",
  messagingSenderId: "1055183511145",
  appId: "1:1055183511145:web:dd103f62324819c8d88cf8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)