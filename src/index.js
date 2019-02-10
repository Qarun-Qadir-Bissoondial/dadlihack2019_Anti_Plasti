import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
serviceWorker.register();
