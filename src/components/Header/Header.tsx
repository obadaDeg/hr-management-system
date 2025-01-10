import styles from './Header.module.css'
import search02 from '../../assets/Icons/search02.svg'
import notification from '../../assets/Icons/notification.svg'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import Search from '../Search/Search';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <p className={styles.headerName}>Hello Robert 👋🏻</p>
        <p className={styles.headerWelcome}>Good Morning</p>
      </div>
      <div className={styles.rightHeader}>
        <Search />
        <button className={styles.headerNotification}>
          <img src={notification} alt="notification" className={styles.notificationIcon}/>
        </button>
        <div className={styles.headerProfile}>
          <div className={styles.profile}>
                <img src="https://s3-alpha-sig.figma.com/img/573f/9e95/d05c616a6eb42b46b77114ca84eaaabc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RiB3kSGxGNsJ6tNFgA~wYoJirQT4yXI89GTo2JsYJhMDo8zyTZGCVFlYdObbMMXXKWHJNFDFXA9jXDg6ZoHFch4cdtnP4bL6p5fg7yRDWelyJllYIVrytoALa23TVSmd2hgjNaNoQX6ntXzVD2HVdH5vo9mN3URXvS2MAaQqwPUwzHhkZ9O1D-uaPFxuswCGdmvnCEOUinkEIcyjKcny3RYjFistdWr6LNSrh-8hkHUj9Tkyg28cPKgBxct-J3kpvSo5nBhuAFpm7KYTYvStQDEr3U7mlbu8TBGj50f711NLvx3edtm8BKltpD~zjsfOzoA5~ZFngSS30ITzK-r~5A__" alt="" className={styles.profileImg}/>
                <div className={styles.profileInfo}>
                  <p className={styles.profileName}>Robert Allen</p>
                  <p className={styles.profilePosition}>HR Manager</p>
                </div>
              </div>
          <FormControl sx={{ m: 0, minWidth: 200}} size='small'>
              <Select style={{paddingTop: '0.5em'}}
              >
                <MenuItem value={"Logout"}>logout</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
              </Select>
          </FormControl>
        </div>
      </div>
    </header>
  )
}
