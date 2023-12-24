import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./routers/RouterContainer";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
}
