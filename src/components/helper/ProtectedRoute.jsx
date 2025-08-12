import LoginPage from "@/pages/LoginPage";
import { useUserStore } from "@/stores/useUserStore";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useUserStore((state) => state.user);
  const checkingAuth = useUserStore((state) => state.checkingAuth);

  if (checkingAuth) return null;
  return user ? children : <LoginPage />;
};

export default ProtectedRoute;
