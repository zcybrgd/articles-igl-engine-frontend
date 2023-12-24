import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}
