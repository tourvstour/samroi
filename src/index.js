import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware } from 'redux'
import reducers from './reducers';
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(logger)) //

const Apps = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(<Apps />, document.getElementById('root'));

serviceWorker.unregister();
