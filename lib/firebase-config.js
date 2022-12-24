import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// getToken(messaging, {
//   vapidKey:
//     "BAJA9KxE_NKB9TGEniYAdrkz9covkatwWlVBtNzFZVlJgX3fAtnEq2vRfpwRmv8JMrFyy0fLzN0cFRZl4IP0-EM",
// }).then((currentToken) => {
//   if (currentToken) {
//     console.log("current token", currentToken);
//   } else {
//     console.log("cannot get token");
//   }
// });

// export function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission()
//     .then((permission) => {
//       if (permission === "granted") {
//         console.log("Notification permission granted");
//       } else {
//         console.log("do not have permission");
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // ...
//     });
// }

// requestPermission();
