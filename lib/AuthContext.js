import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  login: (token) => {},
  logout: () => {},
  token: "",
  isLoggedIn: false,
});

export default function AuthProvider({ children }) {
  const [state, setState] = useState("");

  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    setToken(initialToken);
  }, [state]);

  function login(token) {
    setToken(token);
    localStorage.setItem("token", token);
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
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
