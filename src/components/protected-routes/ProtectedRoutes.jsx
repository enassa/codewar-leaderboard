import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/route-links";
import TPageWrapper from "../page-wrapper/PageWrapper";
import { useAuthService } from "./../../store-and-services/auth-slice/auth-service";

export function ProtectedRoutes() {
  const { userIsLoggedIn } = useAuthService();
  return userIsLoggedIn() ? (
    <TPageWrapper>
      <Outlet />
    </TPageWrapper>
  ) : (
    <Navigate to={ROUTES.base.url} />
  );
}
