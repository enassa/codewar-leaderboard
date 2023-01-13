export const END_POINTS = {
  // AUTH
  login: "/auth/login",
  register: "/auth/signup",

  // LEADER BOARD
  addUserToLearderBoard: "/leaderboard/user/add",
  getCodeWarUserProfile: (username) => `/leaderboard/user/find/${username}`,
  getLeaderBoardByHonor: "/leaderboard/rank/honor",
  getLeaderBoardOverAll: "/leaderboard/rank/overall-score",
  getLeaderBoardByLanguage: (language) =>
    `/leaderboard/rank/language/${language}`,

  // CODE WAR USER
  deleteCodeWarUser: (username) => `/leaderboard/user/${username}`,
  getCodeWarUserInfo: "/user",
  addComment: "leaderboard/comment/add",

  // OTHERS
  getAllLanguages: "/language",
};
