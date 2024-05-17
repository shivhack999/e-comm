import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//redux start
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/reducers/index'
const store = createStore(rootReducer)
console.warn("store data", store);
// redux end
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

