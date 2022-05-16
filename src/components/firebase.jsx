// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3k28SmWgr2lp_KP0wVJEPB6g7fLssCM",
  authDomain: "app1-998e2.firebaseapp.com",
  projectId: "app1-998e2",
  storageBucket: "app1-998e2.appspot.com",
  databaseURL: "https://app1-998e2-default-rtdb.firebaseio.com/",
  messagingSenderId: "972756860045",
  appId: "1:972756860045:web:08c7c553838a15e42436c4"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
