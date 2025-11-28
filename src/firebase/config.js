import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT71Bpw9FzMgZHwDzJzDDTroC8eU4h4XU",
  authDomain: "primerecommerce-ee11f.firebaseapp.com",
  projectId: "primerecommerce-ee11f",
  storageBucket: "primerecommerce-ee11f.firebasestorage.app",
  messagingSenderId: "674195077968",
  appId: "1:674195077968:web:e886b7828db3753e198a55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);