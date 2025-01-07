import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button, useTheme } from "@mui/material";
import AppLogo from "../../assets/AppLogo";
import Apps_updated from '../../assets/Icons/Apps_updated.svg';
import appsSolid_updated from '../../assets/Icons/appsSolid_updated.svg'

export default function Navbar() {
  const theme = useTheme();
  return (
    <nav
      className={styles.sideNavbar}
    >
      <header className={styles.navHeader}>
        <AppLogo />
        <h1 className={styles.logoText}>HRMS</h1>
      </header>

      <menu className={styles.navMenu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            end
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <img src={appsSolid_updated} className={styles.icon} />
                ) : (
                  <img src={Apps_updated} className={styles.icon} />
                )}
                Dashboard
              </>
            )}
          </NavLink>
        </li>
        {/* <li>
            <NavLink
                to={"/employees"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
              {({ isActive }) => (
              <>
                {isActive ? (
                  <GroupsIcon className={styles.icon} />
                ) : (
                  <GroupsOutlinedIcon className={styles.icon} />
                )}
                All Employees
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/departments"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                All Departments
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/attendance"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <EventAvailableIcon className={styles.icon} />
                ) : (
                  <EventAvailableOutlinedIcon className={styles.icon} />
                )}
                Attendance
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/payroll"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                Dashboard
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/jobs"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                Dashboard
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/reports"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                Dashboard
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/holidays"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                Dashboard
              </>
            )}
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/settings"}
                className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                {({ isActive }) => (
              <>
                {isActive ? (
                  <DashboardIcon className={styles.icon} />
                ) : (
                  <DashboardOutlinedIcon className={styles.icon} />
                )}
                Dashboard
              </>
            )}
            </NavLink>
        </li> */}
      </menu>

      {/* <div className={styles.themeToggle}>
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
      </div> */}
    </nav>
  );
}
