/**
 * @file com/follower-cards/index.jsx
 */

// Imports
import React from 'react';
import FollowerCard from '../follower-card';
import Icons from '../../icons';
import './index.css';

// Component
const FollowerCards = () => (
  <div className="fm-follower-cards">
    <FollowerCard
      platform="facebook"
      icon={Icons.facebook}
      userHandle="@nathanf"
      followerCount={1987}
      followerChange={12}
    />
    <FollowerCard
      platform="twitter"
      icon={Icons.twitter}
      userHandle="@nathanf"
      followerCount={1044}
      followerChange={99}
    />
    <FollowerCard
      platform="instagram"
      icon={Icons.instagram}
      userHandle="@realnathanf"
      followerCount="11k"
      followerChange={1099}
    />
    <FollowerCard
      platform="youtube"
      icon={Icons.youtube}
      userHandle="Nathan F."
      followerCount={8239}
      followerChange={-144}
      followerMetric="Subscribers"
    />
  </div>
);

// Exports
export default FollowerCards;
