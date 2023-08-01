import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './redux/store';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'testback-production-9f71.up.railway.app';


ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
     <App /> 
  </BrowserRouter>
    </Provider>,
   document.getElementById('root')
 );
 
 
reportWebVitals();
