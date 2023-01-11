export const ROUTES = {
  // =============== BASE ROUTE ===============
  base: {
    route: "/",
    url: "/",
  },

  // =============== AUTH ROUTES ===============
  auth: {
    route: "/auth",
    url: "/auth",
  },
  forgotPassword: {
    route: "/forgot-password",
    url: "/forgot-password",
  },
  resetPassword: {
    route: "/reset-password",
    url: "/reset-password",
  },

  //===============  PROTECTED ROUTES ===============
  dashboard: {
    route: "/dashboard",
    url: "/dashboard",
  },
  leaderboard: {
    route: "/leaderboard",
    url: "/leaderboard",
  },

  notFound: "*",
};
