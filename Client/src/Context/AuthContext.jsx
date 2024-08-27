import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("https://sicksick.azurewebsites.net/api/auths/login", inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      return res.data; // Optionally return user data
    } catch (err) {
      console.error(err);
      throw err; // Rethrow the error for the component to catch
    }
  };

  const logout = async (navigate) => {
    try {
      await axios.post("https://sicksick.azurewebsites.net/api/auths/logout", {}, { withCredentials: true });
      setCurrentUser(null);
      localStorage.removeItem("user");
      if (navigate) {
        navigate("/login"); // Use navigate for redirection
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
