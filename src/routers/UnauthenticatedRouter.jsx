import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutWelcome from "../pages/LayoutWelcome";
import PageError404 from "../pages/Error/PageError404";
import WelcomePage from "../pages/Welcome page/WelcomePage";
import LoginPage from "../pages/Authentification/LogIn";
import SignUpPage from "../pages/Authentification/SignUp";

const UnauthenticatedRouter = () => {
    return (
      <Routes>
        <Route path="/404error" element={<PageError404 />} />
        <Route path="/" element={<LayoutWelcome />}>
          <Route path="/" element={<WelcomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    );
  }

export default UnauthenticatedRouter
  