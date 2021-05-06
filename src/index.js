import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppProvider } from './components/context';
import { StoreProvider } from './components/storeContext';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
