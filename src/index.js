import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './reducers'

import {App} from './App';
const store = createStore(Reducers);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
