import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcEjagSCKQzohH-_EpzEVaKMooEmbCj5c",
  authDomain: "react-notes-ceb86.firebaseapp.com",
  projectId: "react-notes-ceb86",
  storageBucket: "react-notes-ceb86.appspot.com",
  messagingSenderId: "993832240052",
  appId: "1:993832240052:web:4aef7505de40c0c7b7a8e1"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");