// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNIoLOOPk_dc-DYxT8uvK6OXUbqGgDEvw",
  authDomain: "social-media-app-c059d.firebaseapp.com",
  databaseURL: "https://social-media-app-c059d-default-rtdb.firebaseio.com",
  projectId: "social-media-app-c059d",
  storageBucket: "social-media-app-c059d.appspot.com",
  messagingSenderId: "82287309659",
  appId: "1:82287309659:web:abeec17cb79c087fe6a07e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);