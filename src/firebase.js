import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9mO9mOJPHiBmBnZ26-brlHLq1HoV464s",
    authDomain: "twitter-clone-udemy-36988.firebaseapp.com",
    projectId: "twitter-clone-udemy-36988",
    storageBucket: "twitter-clone-udemy-36988.appspot.com",
    messagingSenderId: "353516920487",
    appId: "1:353516920487:web:6c5c9f550ea8ce93698582"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;