import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ROUTES } from "./constants/route-links";
import Login from "./pages/auth/login/Login";
import LandingPage from "./pages/landing-page/LandingPage";
import Register from "./pages/auth/register/Register";
import { API_HANDLER } from "./util/api-handler";
import ErrorPage from "./pages/error-page/ErrorPage";
import { ProtectedRoutes } from "./components/protected-routes/ProtectedRoutes";
import LeaderBoard from "./pages/leaderbaord/LeaderBoard";
import Accounts from "./pages/accounts/Accounts";
import Auth from "./pages/auth/Auth";

export const API = new API_HANDLER("http://3.20.164.31:8080");
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/*====== Non Protected routes ====== */}
        <Route path={ROUTES.login.route} element={<Auth />} />
        <Route path={ROUTES.register.route} element={<Auth />} />
        <Route path={ROUTES.auth.route} element={<Auth />} />

        {/*====== Protected routes ======  */}
        <Route element={<ProtectedRoutes />}>
          <Route path={ROUTES.accounts.route} element={<Accounts />} />
          <Route path={ROUTES.leaderboard.route} element={<LeaderBoard />} />
        </Route>

        {/* ====== Non existant route ====== */}
        <Route path={ROUTES.notFound} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
