// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFhFXxhP7bwdEJKFb30R-iSKI2bnUsgUE",
  authDomain: "real-estate-a60df.firebaseapp.com",
  projectId: "real-estate-a60df",
  storageBucket: "real-estate-a60df.appspot.com",
  messagingSenderId: "445570401262",
  appId: "1:445570401262:web:e5618fb11dfd70dec044ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;