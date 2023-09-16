// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxwZ1vWFRrEJY4Ck4GzvzdVC5G3wg14r8",
  authDomain: "happyhours-77fd1.firebaseapp.com",
  projectId: "happyhours-77fd1",
  storageBucket: "happyhours-77fd1.appspot.com",
  messagingSenderId: "1020906000677",
  appId: "1:1020906000677:web:108f350a263136f3560acc",
  measurementId: "G-9RKMXEYE17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

// exporting auth
export const auth = getAuth();