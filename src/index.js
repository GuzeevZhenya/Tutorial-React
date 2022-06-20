import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// import App from './tutorial-1/app';
// import { App } from './tutorial-2/app';
// import { App } from './tutorial-3/App'
// import { App } from './tutorial-4/App.html';
// // import { App } from './tutorial-5/App';
// import { App } from "./tutorial-6/App";
// import App from "./Routing/App";

// import { ReactForm } from './React-Form/ReactForm'

import { App } from './tutorial-9-acync/App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
