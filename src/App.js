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
import { Dashboard } from "@mui/icons-material";
import { ProtectedRoutes } from "./components/protected-routes/ProtectedRoutes";
import LeaderBoard from "./pages/leaderbaord/LeaderBoard";

export const API = new API_HANDLER(process.env.REACT_APP_BASE_URL);
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/*====== Non Protected routes ====== */}
        <Route path={ROUTES.base.route} element={<LandingPage />} />
        <Route path={ROUTES.login.route} element={<Login />} />
        <Route path={ROUTES.register.route} element={<Register />} />

        {/*====== Protected routes ======  */}
        <Route element={<ProtectedRoutes />}>
          <Route path={ROUTES.dashboard.route} element={<Dashboard />} />
          <Route path={ROUTES.leaderboard.route} element={<LeaderBoard />} />
        </Route>

        {/* ====== Non existant route ====== */}
        <Route path={ROUTES.notFound} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
