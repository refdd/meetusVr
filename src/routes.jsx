// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import LoginPage from "@/pages/LoginPage";
import ErrorPage from "@/pages/ErrorPage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

// Optional

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />, // optional
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
