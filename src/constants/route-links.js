export const ROUTES = {
  // =============== BASE ROUTE ===============
  base: {
    route: "/",
    url: "/",
  },

  // =============== AUTH ROUTES ===============
  register: {
    route: "/register",
    url: "/register",
  },
  login: {
    route: "/login",
    url: "/login",
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
