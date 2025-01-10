import styles from './Search.module.css'
import search02 from '../../assets/Icons/search02.svg'

export default function Search() {
    return (
        <div className={styles.headerSearch}>
            <img src={search02} alt="search" className={styles.searchIcon} />
            <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
    );
}
