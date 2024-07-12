import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function AuthContext({ children }) {
    const [userAuth, setUserAuth] = useState(
        JSON.parse(localStorage.getItem("user")) ?? ""
    );

    const loginUser = (userData) => {
        setUserAuth(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };
    const logoutUser = () => {
        setUser({});
        localStorage.removeItem("user");
    };
    const value = {
        userAuth,
        loginUser,
        logoutUser,
    };

  return (
    <div>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </div>
  );
}
