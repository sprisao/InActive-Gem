import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppProvider } from './components/context';
import { StoreProvider } from './components/storeContext';
// import axios from 'axios';
// import Airtable from 'airtable';

// //create a new Airtable object in React
// new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base('appDzyBPyX5MjMkrU');
// //base endpoint to call with each request
// axios.defaults.baseURL = 'https://api.airtable.com/v0/appDzyBPyX5MjMkrU/stores';
// //content type to send with all POST requests
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// //authenticate to the base with the API key
// axios.defaults.headers['Authorization'] = 'Bearer API_KEY';

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
