import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './redux/reducers';

import {StoreProvider} from './components/context';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

ReactDOM.render(
    <React.StrictMode>
            <Router>
                <App/>
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
