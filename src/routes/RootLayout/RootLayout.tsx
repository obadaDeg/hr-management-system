import { Outlet } from "react-router-dom";
import styles from './RootLayout.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main id={styles.mainContent}>
        <Header />
        <Outlet />
      </main>
    </>
  );
}