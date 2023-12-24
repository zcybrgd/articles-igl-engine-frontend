import React from "react";
import { useLocation } from "react-router-dom";
import AuthenticatedRouter from "./Router";
import UnauthenticatedRouter from "./UnauthenticatedRouter";

export default function RoutesContainer() {
  const location = useLocation();
  const uRole = location.state?.userRole || "";

  return uRole ? <AuthenticatedRouter userRole={uRole} /> : <UnauthenticatedRouter />;
}
