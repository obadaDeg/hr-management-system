import { NavLink } from "react-router-dom";
import { Button, useTheme } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import styles from "./NavBar.module.css";
import AppLogo from "../../assets/AppLogo";
import { cloneElement } from "react";

export default function Navbar() {
  const theme = useTheme();

  const navItems = [
    {
      to: "/",
      label: "Dashboard",
      icon: <AppsOutlinedIcon />,
      activeIcon: <AppsIcon />,
    },
    {
      to: "/employees",
      label: "All Employees",
      icon: <GroupsOutlinedIcon />,
      activeIcon: <GroupsIcon />,
    },
    {
      to: "/departments",
      label: "All Departments",
      icon: <ApartmentOutlinedIcon />,
      activeIcon: <ApartmentIcon />,
    },
    {
      to: "/attendance",
      label: "Attendance",
      icon: <EventAvailableOutlinedIcon />,
      activeIcon: <EventAvailableIcon />,
    },
    {
      to: "/payroll",
      label: "Payroll",
      icon: <PaidOutlinedIcon />,
      activeIcon: <PaidIcon />,
    },
    {
      to: "/jobs",
      label: "Jobs",
      icon: <WorkOutlineIcon />,
      activeIcon: <WorkIcon />,
    },
    {
      to: "/reports",
      label: "Reports",
      icon: <BarChartOutlinedIcon />,
      activeIcon: <BarChartIcon />,
    },
    {
      to: "/holidays",
      label: "Holidays",
      icon: <BeachAccessOutlinedIcon />,
      activeIcon: <BeachAccessIcon />,
    },
    {
      to: "/settings",
      label: "Settings",
      icon: <SettingsOutlinedIcon />,
      activeIcon: <SettingsIcon />,
    },
  ];

  console.log(theme);

  const mode = theme.palette.mode;

  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light;

  return (
    <nav className={styles.sideNavbar}>
      <NavLink to="/" className={styles.logoLink}>
        <header className={styles.navHeader}>
          <AppLogo />
          <h1 className={styles.logoText}>HRMS</h1>
        </header>
      </NavLink>

      <menu className={styles.navMenu}>
        {navItems.map(({ to, label, icon, activeIcon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive
                    ? cloneElement(activeIcon, {
                        style: { color: theme.palette.primary.main },
                      })
                    : cloneElement(icon)}
                  <span
                    style={{
                      color: isActive ? theme.palette.primary.main : "inherit",
                    }}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </menu>

      <div className={styles.themeToggle}>
        <Button
          variant={mode === "light" ? "contained" : "outlined"}
          color="primary"
          className={styles.toggleButton}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <WbSunnyOutlinedIcon />
          Light
        </Button>
        <Button
          variant={mode === "dark" ? "contained" : "outlined"}
          color="primary"
          className={styles.toggleButton}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <BedtimeOutlinedIcon />
          Dark
        </Button>
      </div>
    </nav>
  );
}
