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
  login: {
    route: "/login",
    url: "/login",
  },
  register: {
    route: "/register",
    url: "/register",
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
  accounts: {
    route: "/accounts",
    url: "/accounts",
  },
  leaderboard: {
    route: "/leaderboard",
    url: "/leaderboard",
  },

  notFound: "*",
};
