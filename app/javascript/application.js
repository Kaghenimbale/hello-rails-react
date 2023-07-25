// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(document.getElementById('root'));
root.render(<App />);
