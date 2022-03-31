import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import '../public/styles.css';
import App from './App.js';

const container = document.getElementById('app');

// Create a root
const root = ReactDomClient.createRoot(container);

root.render(<App />);
