import React, { useState, useMemo, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1) when the component mounts, check localStorage
  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored == "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 2) when isLoggedIn changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
