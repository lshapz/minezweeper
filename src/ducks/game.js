export const endGame = () => {
  return {
    type: 'WON GAME'
  };
}// make these thunks that deal with the timeReducer

export const takeTurn = () => {
  return {
    type: 'NEXT TURN'
  };
}

export const resetGame = () => {
  return {
    type: 'RESET GAME'
  };
}// make these thunks that deal with the timeReducer

export const lostGame = () => {
  return {
    type: 'LOST GAME'
  }
}// make these thunks that deal with the timeReducer

let timer = null;
const start = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: 'TIMER_START' });
  dispatch(tick())
}
const tick = () => { type: 'TIMER_TICK' };
const stop = () => {
  clearInterval(timer);
  return { type: 'TIMER_STOP' };
}


export const gameReducer = (state = {playing: false, turn: 0, lost: false}, action) => {
  switch (action.type) {
    case 'NEXT TURN':
      let newTurn = state.turn +=1 
    return {...state, turn: newTurn}
    case 'WON GAME':
      console.log("game over, you win")
      return {...state, playing: false }
    case 'LOST GAME': 
      console.log("game over, you lose")
      return {...state, lost: true, playing: false}
    case 'RESET GAME':
      console.log("off to the races")
      return {playing: true, turn: 0, lost: false}
    default:
      return state;
  }
};
