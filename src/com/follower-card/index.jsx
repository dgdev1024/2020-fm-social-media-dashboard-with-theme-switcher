/**
 * @file com/follower-card/index.jsx
 */

// Imports
import React from 'react';
import IconUp from '../../img/icon-up.svg';
import IconDown from '../../img/icon-down.svg';
import './index.css';

// Component
const FollowerCard = ({
  platform,
  icon,
  userHandle,
  followerCount,
  followerChange,
  followerMetric = 'Followers'
} = {}) => (
  <div className="fm-follower-card" id={platform}>
    <div className="fm-follower-handle">
      <img src={icon} alt={platform} />
      <p>{userHandle}</p>
    </div>
    <div className="fm-follower-count">
      <h2>{followerCount}</h2>
      <p>{followerMetric}</p>
    </div>
    <div className="fm-follower-change">
      <img src={followerChange < 0 ? IconDown : IconUp} alt="change"/>
      <p className={followerChange < 0 ? 'loss' : 'gain'}>{Math.abs(followerChange)} Today</p>
    </div>
  </div>
);

// Export
export default FollowerCard