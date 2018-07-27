import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const appProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appProvider, document.getElementById('root'));
registerServiceWorker();
