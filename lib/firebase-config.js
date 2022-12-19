import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBrWAQkp8lugu5f_W91xmbwDY3E85EGFiE",
  authDomain: "medic-d21be.firebaseapp.com",
  databaseURL: "https://medic-d21be-default-rtdb.firebaseio.com",
  projectId: "medic-d21be",
  storageBucket: "medic-d21be.appspot.com",
  messagingSenderId: "870835172215",
  appId: "1:870835172215:web:146bf75b24f1ed4aa56772",
  measurementId: "G-Z4G6YHENV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
