import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  login: (token) => {},
  logout: () => {},
  token: "",
  isLoggedIn: false,
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const router = useRouter();

  function login(token) {
    setToken(token);
  }
  function logout() {
    setToken(null);
    router.replace("/account/login");
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
