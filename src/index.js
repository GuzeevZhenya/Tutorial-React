import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './tutorial-1/app';
// import { App } from './tutorial-2/app';
// import { App } from './tutorial-3/App'
// import { App } from './tutorial-4/App.html';
import { App } from './tutorial-5/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
