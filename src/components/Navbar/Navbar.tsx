import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button } from "@mui/material";
import AppLogo from "../../assets/AppLogo";
import { Home } from "@mui/icons-material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

export default function Navbar() {
  return (
    <>
      <nav className={styles.sideNavbar}>
        <AppLogo />
        <menu className={styles.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              {({ isActive }) => (
                <>
                  {isActive ? <Home /> : <Home />}
                  Dashboard
                </>
              )}
            </NavLink>
          </li>
        </menu>
        <Button
          variant="contained"
          color="primary"
          className={styles.logoutButton}
        >
            <WbSunnyOutlinedIcon />
            Light
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.logoutButton}
        >
            <BedtimeOutlinedIcon />
            Dark
        </Button>
      </nav>
    </>
  );
}
