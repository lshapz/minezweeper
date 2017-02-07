import {combineReducers} from 'redux';
import {gameReducer} from './game.js'
import {nearReducer} from './nearby.js'

const rootReducer = combineReducers({
   gameReducer, nearReducer
 });


export default rootReducer 