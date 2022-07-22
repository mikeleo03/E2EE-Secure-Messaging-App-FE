import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { stores } from './redux/stores';
import App from './App';
import './main.css';
import './scrollbar.css';
import 'antd/dist/antd.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>
);
