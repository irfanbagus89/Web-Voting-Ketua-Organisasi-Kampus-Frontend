import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../utils/auth";
import ProtectedRoute from "../components/ProtectAuth";
import MyLayout from "../components/MyLayout";
import Navbar from "../components/Navbar/Navbar";
import Dasboard from "../pages/Dasboard/Dasboard";
import Login from "../pages/Login/Login";
import Kandidat from "../pages/Kandidat/Kandidat";

const AppRoute = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <MyLayout />
            </>
          }
        >
          <Route
            path="admin/dasboard"
            element={
              <ProtectedRoute requiredRole="admin bem">
                <Dasboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/kandidat"
            element={
              <ProtectedRoute requiredRole="admin bem">
                <Kandidat />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="admin/dasboard" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRoute;
