import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function AuthContext({ children }) {
    const userAuth = JSON.parse(localStorage.getItem("user")) ?? "";
    const value = {
        userAuth,
    };
    return (
        <div>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </div>
    );
}
