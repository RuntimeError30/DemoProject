import React from 'react';
import styles from './ScrollArea.module.css';

const ScrollArea = ({ children }) => {
  return (
    <div className={styles.scrollArea}>
      {children}
    </div>
  );
};

export default ScrollArea;

