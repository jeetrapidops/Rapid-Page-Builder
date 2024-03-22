import { useState,useContext ,useEffect, createContext } from "react";
import axios  from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    access_token: "",
  });

  const logout = () => {
    // Clear user session without removing details from local storage
    setAuth(
      {
        access_token : ""
      }
    );
    localStorage.removeItem("user"); 
  };

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.access_token;

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {

      setAuth({
        ...auth,
        access_token : data.access_token
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth , logout]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };