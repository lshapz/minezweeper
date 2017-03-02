export const endGame = () => {
  return {
    type: 'WON GAME'
  };
}

export const takeTurn = () => {
  return {
    type: 'NEXT TURN'
  };
}

export const resetGame = () => {
  return {
    type: 'RESET GAME'
  };
}

export const lostGame = () => {
  return {
    type: 'LOST GAME'
  }
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
      return {playing: true, turn: 0}
    default:
      return state;
  }
};
