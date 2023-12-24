import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
