import Card from './components/Card/Card'
import styles from './Dashboard.module.css'
import users02 from '../../assets/Icons/users02.svg'
import briefcase04 from '../../assets/Icons/briefcase04.svg' 
import calendarCheck from '../../assets/Icons/calendarCheck.svg'
import file from '../../assets/Icons/file.svg'
import AttendanceOverview from './components/AttendanceOveriew/AttendanceOveriew'
import Calendar from './components/Calendar/Calendar'

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.containerUpper}>
        <div className={styles.leftContainer}>
          <div className={styles.cardContainer}>
            <Card icon={users02} title='Total Employee' number={560} color='green' percentage={12} date='July 16, 2023'/>
            <Card icon={briefcase04} title='Total Applicant' number={1050} color='green' percentage={5} date='July 14, 2023'/>
            <Card icon={calendarCheck} title='Total Attendance' number={470} color='red' percentage={8} date='July 14, 2023'/>
            <Card icon={file} title='Total Projects' number={250} color='green' percentage={12} date='July 10, 2023'/>
          </div>
          <div className={styles.attendanceContainer}>
            <AttendanceOverview />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Calendar />
        </div>
      </div>
      <div className={styles.containerLower}></div>
    </main>
  )
}
