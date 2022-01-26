import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiltFuyIC_MHaV4JgJsnl6_x0BEoBD_oc",
    authDomain: "todo-crud-1ae45.firebaseapp.com",
    projectId: "todo-crud-1ae45",
    storageBucket: "todo-crud-1ae45.appspot.com",
    messagingSenderId: "31421382854",
    appId: "1:31421382854:web:04fbbbf5a3e708ebc757c7"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };