import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers&layouts/Router";
import { AuthProvider } from "./context/AuthContext";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}