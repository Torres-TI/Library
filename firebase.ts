import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAz48KJFDU0c6CRuHDJ5eSXnAQ6qDo9hhE",
  authDomain: "library-web-app-64025.firebaseapp.com",
  projectId: "library-web-app-64025",
  storageBucket: "library-web-app-64025.appspot.com",
  messagingSenderId: "667697650063",
  appId: "1:667697650063:web:1c8d00a6c1b407a17ed3fa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
