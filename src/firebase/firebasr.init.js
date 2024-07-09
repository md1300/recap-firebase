// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqdB9BI6l6D2AO4hEznBvu6zUm3k6rXFQ",
  authDomain: "recap-context-api.firebaseapp.com",
  projectId: "recap-context-api",
  storageBucket: "recap-context-api.appspot.com",
  messagingSenderId: "687201853208",
  appId: "1:687201853208:web:d8ce4117f9e4a681f3486d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth