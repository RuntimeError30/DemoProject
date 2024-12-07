import React, { useState } from 'react';
import { BarChart3, Grid2X2, LineChart, Maximize2, Menu, MinusSquare, Network, Plus, SplitSquareHorizontal, X } from 'react-icons/lu';
import styles from './StatisticalAnalysis.module.css';

import Button from './Button';
import ResizablePanelGroup from './ResizablePanelGroup';
import ScrollArea from './ScrollArea';
import Separator from './Separator';
import Tabs from './Tabs';
import Tooltip from './Tooltip';

const StatisticalAnalysis = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [data, setData] = useState({});

  const columns = ['A', 'B', 'C'];
  const rows = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleCellClick = (cellId) => {
    setSelectedCell(cellId);
  };

  const handleCellChange = (cellId, value) => {
    setData(prev => ({
      ...prev,
      [cellId]: value
    }));
  };

  return (
    <div className={styles.container}>
      {/* Window Title Bar */}
      <div className={styles.titleBar}>
        <div className={styles.titleBarLeft}>
          <Menu className={styles.icon} />
          <span className={styles.titleText}>Untitled</span>
        </div>
        <div className={styles.titleBarRight}>
          <Button icon={<MinusSquare />} />
          <Button icon={<Maximize2 />} />
          <Button icon={<X />} />
        </div>
      </div>

      {/* Main Navigation */}
      <Tabs
        tabs={['Variables', 'Data', 'Analyses', 'Edit']}
        defaultTab="Analyses"
      />

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <Tooltip content="Exploration">
          <Button icon={<BarChart3 />} text="Exploration" />
        </Tooltip>
        <Tooltip content="T-Tests">
          <Button icon={<SplitSquareHorizontal />} text="T-Tests" />
        </Tooltip>
        <Tooltip content="ANOVA">
          <Button icon={<Grid2X2 />} text="ANOVA" />
        </Tooltip>
        <Tooltip content="Regression">
          <Button icon={<LineChart />} text="Regression" />
        </Tooltip>
        <Tooltip content="Factor">
          <Button icon={<Network />} text="Factor" />
        </Tooltip>
        <div className={styles.spacer} />
        <Tooltip content="Add Module">
          <Button icon={<Plus />} />
        </Tooltip>
      </div>

      {/* Main Content */}
      <ResizablePanelGroup>
        {/* Spreadsheet Panel */}
        <ScrollArea>
          <div className={styles.spreadsheet}>
            {/* Header Row */}
            <div className={styles.headerRow}>
              <div className={styles.headerCell} />
              {columns.map((col) => (
                <div key={col} className={styles.headerCell}>
                  {col}
                </div>
              ))}
            </div>
            
            {/* Data Rows */}
            {rows.map((row) => (
              <div key={row} className={styles.dataRow}>
                <div className={styles.rowHeader}>{row}</div>
                {columns.map((col) => {
                  const cellId = `${col}${row}`;
                  return (
                    <div
                      key={cellId}
                      className={styles.dataCell}
                      onClick={() => handleCellClick(cellId)}
                    >
                      <input
                        type="text"
                        className={styles.cellInput}
                        value={data[cellId] || ""}
                        onChange={(e) => handleCellChange(cellId, e.target.value)}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Output Panel */}
        <div className={styles.outputPanel}>
          <div className={styles.outputContent}>
            <p>No analyses to display</p>
            <p className={styles.smallText}>Select an analysis from the toolbar above to begin</p>
          </div>
        </div>
      </ResizablePanelGroup>

      {/* Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span>Ready</span>
          <Separator />
          <span>Filters: 0</span>
        </div>
        <div className={styles.statusRight}>
          <span>Row count: 0</span>
          <span>Filtered: 0</span>
          <span>Deleted: 0</span>
          <span>Added: 0</span>
          <span>Cells edited: 0</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticalAnalysis;

