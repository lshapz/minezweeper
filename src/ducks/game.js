

export const endGame = () => {
  return {
    type: 'END GAME'
  };
}

export const mineCount = () => {
  return {
    type: 'RENDER GRID'
  };
}

export const flagCount = (flagged) => {
  return {
    payload: flagged.me.flag,
    type: 'MINE FLAGGED'
  };
}


export const takeTurn = () => {
  return {
    type: 'NEXT TURN'
  };
}


export const gameReducer = (state = {playing: true, mines: 0, turn: 0}, action) => {
  switch (action.type) {
    case 'RENDER GRID':
      let newMine = state.mines += 1
      return {...state, mines: newMine}
    case 'NEXT TURN':
      let newTurn = state.turn +=1 
    return {...state, turn: newTurn}
    case 'END GAME':
      console.log("game over")
      return {...state, playing: false } ;
    case 'MINE FLAGGED':
      let flag 
      if (action.payload === true)
      {flag = state.mines -= 1}
      else if (action.payload === false)
      {flag = state.mines += 1}
      return {...state, mines: flag }
    default:
      return state;
  }
};
