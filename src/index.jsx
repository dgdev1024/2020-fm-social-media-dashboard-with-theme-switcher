/**
 * @file index.jsx
 */

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './com/app';
import './index.css';

// Embed
const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
