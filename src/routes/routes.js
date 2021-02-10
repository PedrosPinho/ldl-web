import Home from "../views/Home";
import HomeIcon from "@material-ui/icons/Home";

import Twitch from "../views/Twitch";
import TwitchIcon from "@material-ui/icons/LiveTv";

import Rules from "../views/Rules";
import GavelIcon from "@material-ui/icons/Gavel";

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
    exact: true,
    component: Home,
    alias: "Home",
    icon: HomeIcon
  },
  {
    path: "/tv",
    exact: true,
    component: Twitch,
    alias: "Transmissão",
    icon: TwitchIcon
  },
  {
    path: "/regulacao",
    exact: true,
    component: Rules,
    alias: "Regulação",
    icon: GavelIcon
  },
];
