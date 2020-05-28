/**
 * @file com/header/index.jsx
 */

// Imports
import React from 'react';
import './index.css';

// Component
const Header = ({ 
  onToggleDarkModeClicked,
  darkModeEnabled
}) => (
  <header>
    <div className="fm-header-main">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
    </div>
    <div className="fm-header-dark-mode-toggle">
      <p>Dark Mode</p>
      <button
        type="button"
        className={darkModeEnabled === true ? 'on' : ''}
        aria-label="Toggle Dark Mode"
        onClick={onToggleDarkModeClicked}
      >
        <div className="fm-button-notch"></div>
      </button>
    </div>
  </header>
);

// Export
export default Header;
