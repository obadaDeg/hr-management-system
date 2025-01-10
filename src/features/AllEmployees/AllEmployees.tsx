import React from "react";
import { useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { Employee } from "../../types/general-types";
import styles from "./AllEmployees.module.css";
import Search from "../../components/Search/Search";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { EmployeeTable } from "./components/EmployeeTable/EmployeeTable";

const AllEmployees: React.FC = () => {
  const employees: Employee[] = getAllEmployees();
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Search />
        <div className={styles.rightHeader}>
          <button className={styles.addEmp}><AddCircleOutlineIcon />Add New Employee</button>
          <button className={styles.filterEmp}><TuneRoundedIcon />Filter</button>
        </div>
      </header>
      <EmployeeTable data={employees} />
    </main>
  );
};

export default AllEmployees;
