import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB3IBh2jgegqm0Pi31JFWWDkzR-iNjVq-o",
  authDomain: "instagram-clone-d526b.firebaseapp.com",
  projectId: "instagram-clone-d526b",
  storageBucket: "instagram-clone-d526b.appspot.com",
  messagingSenderId: "172748330538",
  appId: "1:172748330538:web:fa41ea53e9115680b7d553",
});

const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);

export { db, auth, storage };
