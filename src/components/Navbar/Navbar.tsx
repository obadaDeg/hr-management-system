import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { alpha, Button, useTheme } from "@mui/material";
import AppLogo from "../../assets/AppLogo";
import { Home } from "@mui/icons-material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export default function Navbar() {
  const theme = useTheme();
  const secondaryWithOpacity = alpha(theme.palette.text.secondary, 0.05);

  return (
    <nav
      className={styles.sideNavbar}
      style={{ backgroundColor: secondaryWithOpacity }}
    >
      <header className={styles.navHeader}>
        <AppLogo />
        <h1 className={styles.logoText}>HRMS</h1>
      </header>

      <menu className={styles.navMenu}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            end
          >
            <Home className={styles.icon} />
            Dashboard
          </NavLink>
        </li>
        <li>
            <NavLink
                to={"/employees"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Employees
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/departments"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Departments
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/attendance"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Attendance
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/payroll"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Payroll
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/jobs"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Jobs
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/reports"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                candidates
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/holidays"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Holidays
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/settings"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                <Home className={styles.icon} />
                Settings
            </NavLink>
        </li>
      </menu>

      <div className={styles.themeToggle}>
        <Button
          variant="contained"
          color="primary"
          className={styles.toggleButton}
        >
          <WbSunnyOutlinedIcon />
          Light
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.toggleButton}
        >
          <BedtimeOutlinedIcon />
          Dark
        </Button>
      </div>
    </nav>
  );
}
