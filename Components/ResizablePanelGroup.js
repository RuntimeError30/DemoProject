import React, { useState } from 'react';
import styles from './ResizablePanelGroup.module.css';

const ResizablePanelGroup = ({ children }) => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(50);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setLeftPanelWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel} style={{ width: `${leftPanelWidth}%` }}>
        {children[0]}
      </div>
      <div className={styles.resizeHandle} onMouseDown={handleMouseDown} />
      <div className={styles.rightPanel} style={{ width: `${100 - leftPanelWidth}%` }}>
        {children[1]}
      </div>
    </div>
  );
};

export default ResizablePanelGroup;

