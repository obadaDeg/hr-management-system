import React from 'react'
import { useState } from 'react'
import { Employee } from '../../../../types/general-types'
import styles from './EmployeeTable.module.css'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface EmployeeTableProps {
  data: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [employeesPerPage, setEmployeesPerPage] = useState<number>(10);
  
    const indexOfLastRecord = currentPage * employeesPerPage;      
    const indexOfFirstRecord = indexOfLastRecord - employeesPerPage;
  
    const currentEmployees = data.slice(indexOfFirstRecord, indexOfLastRecord);
  
    const totalPages = Math.ceil(data.length / employeesPerPage);
  
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  return (
    <>
        <table className={styles.employeeTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {currentEmployees.map((emp) => (
            <tr key={emp.emp_id} className={styles.tableRow}>
              <td>
                <span className={styles.employeeName}>
                  <img 
                  src={emp.emp_Img} 
                  alt={emp.emp_name} 
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }} 
                  />
                  {emp.emp_name}
                </span>
                
              </td>
              <td>{emp.emp_id}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.employee_type}</td>
              <td>{emp.marital_status}</td>
              <td>
                <div className={styles.actionButtons}>
                  <button className={styles.viewButton}><RemoveRedEyeOutlinedIcon /></button>
                  <button className={styles.editButton}><BorderColorOutlinedIcon /></button>
                  <button className={styles.deleteButton}><DeleteOutlineOutlinedIcon /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className={styles.pagination}>
        <div className={styles.empNumbers}>
          <p>Showing</p>
          <select
            className={styles.empSelect}
            value={employeesPerPage}
            onChange={(e) => setEmployeesPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>
        <div className={styles.empRecords}>
          <p>Showing 1 to {employeesPerPage} out of {data.length} records</p>
        </div>
        <div className={styles.pageNumbers}>
          <button onClick={goToPrevious} disabled={currentPage === 1} style={{padding: "0.25em 0.5em", borderRadius: "8px", backgroundColor: "transparent", border: "none", color: "black"}}>
            {"<"}
          </button>

          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => paginate(pageNum)}
              style={{
                backgroundColor: "transparent",
                color: pageNum === currentPage ? "#7152f3" : "black",
                padding: "0.25em 0.5em",
                border: pageNum === currentPage ? "1px solid #7152f3" : "none",
                borderRadius: "8px"
              }}
            >
              {pageNum}
            </button>
          ))}

          <button onClick={goToNext} disabled={currentPage === totalPages} style={{padding: "0.25em 0.5em", borderRadius: "8px", backgroundColor: "transparent", border: "none", color: "black"}}>
            {">"}
          </button>
        </div>
      </section>
    </>
  )
}
