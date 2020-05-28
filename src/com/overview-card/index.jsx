/**
 * @file com/overview-card/index.jsx
 */

// Imports
import React from 'react';
import IconUp from '../../img/icon-up.svg';
import IconDown from '../../img/icon-down.svg';
import './index.css';

// Component
const OverviewCard = ({
  title,
  icon,
  count,
  percent
}) => (
  <div className="fm-overview-card">
    <span className="fm-overview-card-title">{title}</span>
    <img src={icon} alt="title" />
    <span className="fm-overview-card-count">{count}</span>
    <p className="fm-overview-card-percent">
      <img src={percent < 0 ? IconDown : IconUp} alt="Change" />
      <span className={percent < 0 ? 'loss' : 'gain'}>{Math.abs(percent)}%</span>
    </p>
  </div>
);

// Export
export default OverviewCard;