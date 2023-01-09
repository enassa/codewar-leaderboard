import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/route-links";
import { useAuthService } from "./../../store-and-services/auth-slice/auth-service";

export function ProtectedRoutes() {
  const { userIsLoggedIn } = useAuthService();
  return userIsLoggedIn() ? <Outlet /> : <Navigate to={ROUTES.login.url} />;
}
