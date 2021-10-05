import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
console.log(`environment mode is ${ENVIRONMENT_MODE}`);
ReactDOM.render(<App />, document.getElementById('root'));
