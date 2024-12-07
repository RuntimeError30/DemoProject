import React from "react";
import "./App.css"; // Add exact styles here

const App = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <span className="header-logo">jamovi</span>
        <span className="header-title"> - Untitled</span>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <div className="tab active">Variables</div>
        <div className="tab">Data</div>
        <div className="tab">Analyses</div>
        <div className="tab">Edit</div>
      </div>

      {/* Main Layout */}
      <div className="main">
        {/* Toolbar */}
        <div className="toolbar">
          <div className="toolbar-item">Exploration</div>
          <div className="toolbar-item">T-Tests</div>
          <div className="toolbar-item">ANOVA</div>
          <div className="toolbar-item">Regression</div>
          <div className="toolbar-item">Frequencies</div>
          <div className="toolbar-item">Factor</div>
        </div>

        {/* Table */}
        <div className="data-table">
          <div className="table-header">
            <div className="column-header">A</div>
            <div className="column-header">B</div>
            <div className="column-header">C</div>
          </div>
          <div className="table-body">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="table-row">
                <div className="table-cell"></div>
                <div className="table-cell"></div>
                <div className="table-cell"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="right-panel-logo">
            <span className="logo-symbol">v</span>
            <span className="version-text">version 2.3.28</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <span>Ready</span>
        <span>Row count 0 | Filtered 0 | Deleted 0 | Added 0 | Cells edited 0</span>
      </div>
    </div>
  );
};

export default App;
