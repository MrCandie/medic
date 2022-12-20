import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  login: (token) => {},
  logout: () => {},
  token: "",
  isLoggedIn: false,
  UID: "",
});

export default function AuthProvider({ children }) {
  const [state, setState] = useState("");
  const [uid, setUid] = useState("");
  const [userId, setUserId] = useState("");

  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    const userUid = localStorage.getItem("uid");
    setToken(initialToken);
    setUid(userUid);
  }, [state]);

  function login(token, id) {
    setToken(token);
    setUid(id);
    localStorage.setItem("token", token);
    localStorage.setItem("uid", id);
  }
  function logout() {
    setToken(null);
    router.replace("/account/login");
    localStorage.removeItem("token");
  }
  const isLoggedIn = !!token;

  const value = {
    token: token,
    login,
    logout,
    isLoggedIn,
    UID: uid,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
