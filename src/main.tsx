import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { stores } from './redux/stores';
import App from './App';
import './main.css';
import './scrollbar.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={stores}>
      <App />
    </Provider>
  </BrowserRouter>
);
