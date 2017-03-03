import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './ducks/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk' //not actually using this 

const store = 
  createStore(rootReducer, 
    composeWithDevTools(
      applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
