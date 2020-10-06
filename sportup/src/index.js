import React from 'react';
import ReactDOM from 'react-dom';
/**Librerías Bootstrap */

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

// import './bootstrap.css';
// import './responsive.css';
// import './index.css';
import './SApp.css';

import { App } from './App';

ReactDOM.render(
   <App/>,
  document.getElementById('root')
);
