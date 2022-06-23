import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj-pjN_Mvw3mBV79gGZzYwspQqHZY4_a0",
  authDomain: "backendreactcoder-7eee3.firebaseapp.com",
  projectId: "backendreactcoder-7eee3",
  storageBucket: "backendreactcoder-7eee3.appspot.com",
  messagingSenderId: "31047244445",
  appId: "1:31047244445:web:af58a0315b3580afca5274",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
