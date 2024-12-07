import React, { useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className={styles.tooltipContent}>{content}</div>}
    </div>
  );
};

export default Tooltip;

