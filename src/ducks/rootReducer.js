import {combineReducers} from 'redux';
import {gameReducer} from './game.js'
import {nearReducer} from './nearby.js'
import {gridReducer} from './board.js'
const rootReducer = combineReducers({
   gameReducer, nearReducer, gridReducer
 });


export default rootReducer 