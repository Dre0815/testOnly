import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Reservation from "views/Reservation.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-grid-45",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/reservation",
    name: "Reservations",
    icon: "nc-icon nc-paper-2",
    component: Reservation,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Guest List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Working Schedule",
    icon: "nc-icon nc-watch-time",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Table Map",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
