import Twitch from "../views/Twitch";
import TwitchIcon from "@material-ui/icons/LiveTv";

export const authRoutes = [
{
    path: "/",
    exact: true,
    component: Twitch,
    alias: "Twitch",
  },
];

export const routes = [
  {
    path: "/",
    exact: false,
    component: Twitch,
    alias: "Transmissão",
    icon: TwitchIcon
  },
];
