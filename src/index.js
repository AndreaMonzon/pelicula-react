import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./pages/App";



ReactDOM.render(
  // al elemento root se le inyecta el codigo de react q se encuentra en app

    <App/>,
  document.getElementById('root')
);

