import { useEffect } from "react";
import AuthProvider from "../lib/AuthContext";
import { messaging } from "../lib/firebase-config";
import { getToken } from "firebase/messaging";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // async function requestPermission() {
  //   const permission = Notification.requestPermission();
  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BD_1PZpWsGxNRO2YMzK7uYMVboyL0mtvWCfvw3w8r-oZl0nh6_foaeecQPmlpL6LA7_dgunaHQeh62KLaXdMLok",
  //     });
  //     console.log("token generated", token);
  //   } else if (permission === "denied") {
  //     alert("you denied notification");
  //   }
  // }
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
