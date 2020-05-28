/**
 * @file com/app/app.jsx
 */

// Imports
import React, { useState } from 'react';
import Header from '../header';
import FollowerCards from '../follower-cards';
import OverviewCards from '../overview-cards';
import './index.css';

const App = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => setDark(!dark);

  return (
    <main className={dark ? 'dark' : ''}>
      <div className="container">
        <Header onToggleDarkModeClicked={toggleDarkMode} darkModeEnabled={dark} />
        <FollowerCards />
        <OverviewCards />
      </div>
    </main>
  );
};

export default App;
