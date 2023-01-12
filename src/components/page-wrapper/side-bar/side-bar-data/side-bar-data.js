import {
  AccountBox,
  Business,
  Dashboard,
  History,
  Logout,
} from "@mui/icons-material";
import { ROUTES } from "../../../../constants/route-links";

export const SideBarData = [
  {
    title: "LeaderBoard",
    url: ROUTES.leaderboard.url,
    route: ROUTES.leaderboard.route,
    icon: <Dashboard />,
    group: 1,
  },
  {
    title: "Accounts",
    url: ROUTES.accounts.url,
    route: ROUTES.accounts.route,
    icon: <AccountBox />,
    group: 1,
  },
  {
    title: "Logout",
    url: ROUTES.base.url,
    route: ROUTES.base.route,
    icon: <Logout />,
    group: 2,
  },
];
