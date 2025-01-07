import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  icon: string; // SVG path as a string
  title: string;
  number: number | string;
  color: string;
  percentage: number;
  date: string;
}

const Card: React.FC<CardProps> = ({ icon, title, number, color ,percentage, date }) => {
  return (
    <>
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.cardTop}>
              <img src={icon} alt={`${title} icon`} className={styles.cardIcon}/>
              <p className={styles.cardTitle}>{title}</p>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardNumber}>{number}</p>
            <div className={`${styles.percentageContainer} ${styles[color]}`}>
                <span className={styles.percentageIcon}>{color === 'green'? "▲" : "▼"}</span>
                <p className={styles.percentage}>{percentage}%</p>
            </div>
              
            </div>
        </div>
        <p className={styles.cardFooter}>Update: {date}</p>
    </div>
    
    </>
  );
};

export default Card;
