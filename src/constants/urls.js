export const END_POINTS = {
  // AUTH
  login: "/auth/login",
  register: "/auth/signup",

  // LEADER BOARD
  addUserToLearderBoard: "/leaderboard",
  getLeaderBoardByHonor: (honor) => `/leaderboard/${honor}`,
  getLeaderBoardByRank: (rank) => `/leaderboard/${rank}`,
  getLeaderBoardByLanguage: (rank, language) =>
    `/leaderboard/${rank}/${language}`,

  // CODE WAR USER
  deleteCodeWarUser: (username) => `/leaderboard/${username}`,
  getCodeWarUserInfo: "/user",
  addComment: "comment/add",

  // OTHERS
  getAllLanguages: "/language",
};
