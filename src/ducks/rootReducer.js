import {combineReducers} from 'redux';
import {gameReducer} from './game.js'
// import {timeReducer} from './timer.js'
import {gridReducer} from './board.js'
const rootReducer = combineReducers({
   gameReducer, gridReducer
 });


export default rootReducer 