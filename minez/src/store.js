import rootReducer from './ducks/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export default store
const store = 
  createStore(rootReducer, 
    composeWithDevTools(
      applyMiddleware(thunk)))
