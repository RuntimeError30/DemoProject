import React from 'react';
import styles from './Button.module.css';

const Button = ({ icon, text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default Button;

