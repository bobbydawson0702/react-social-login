import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Ensure the container element exists in your index.html
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);


root.render(
    <App />
);