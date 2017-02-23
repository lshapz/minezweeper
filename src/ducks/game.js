

export const endGame = () => {
  return {
    type: 'END GAME'
  };
}

export const takeTurn = () => {
  return {
    type: 'NEXT TURN'
  };
}


export const gameReducer = (state = {playing: true, turn: 0}, action) => {
  switch (action.type) {

    case 'NEXT TURN':
      let newTurn = state.turn +=1 
    return {...state, turn: newTurn}
    case 'END GAME':
      console.log("game over")
      return {...state, playing: false } ;
    default:
      return state;
  }
};
