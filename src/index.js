import createHistory from 'history/createBrowserHistory'
import configureStore from './app/store/configureStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProviders from './app/AppProviders'
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <AppProviders store={store} history={history}>
        <App />
      </AppProviders>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
