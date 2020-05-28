/**
 * @file com/overview-cards/index.jsx
 */

// Imports
import React from 'react';
import OverviewCard from '../overview-card';
import Icons from '../../icons';
import './index.css';

// Component
const OverviewCards = () => (
  <div className="fm-overview">
    <h2>Overview - Today</h2>
    <div className="fm-overview-cards">
      <OverviewCard title="Page Views" icon={Icons.facebook} count={87} percent={3} />
      <OverviewCard title="Likes" icon={Icons.facebook} count={52} percent={-2} />
      <OverviewCard title="Likes" icon={Icons.instagram} count={5462} percent={2257} />
      <OverviewCard title="Profile Views" icon={Icons.instagram} count="52k" percent={1375} />
      <OverviewCard title="Retweets" icon={Icons.twitter} count={117} percent={303} />
      <OverviewCard title="Likes" icon={Icons.twitter} count={507} percent={553} />
      <OverviewCard title="Likes" icon={Icons.youtube} count={107} percent={-19} />
      <OverviewCard title="Total Views" icon={Icons.youtube} count={1407} percent={-12} />
    </div>
  </div>
);

// Exports
export default OverviewCards;
