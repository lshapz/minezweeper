

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

export const flagCount = () => {
  return {
    type: 'MINE FLAGGED'
  };
}


export const gameReducer = (state = {playing: true, mines: 0}, action) => {
  switch (action.type) {
    case 'RENDER GRID':
      let newMine = state.mines += 1
      return {...state, mines: newMine}
    case 'END GAME':
      console.log("game over")
      return {...state, playing: false } ;
    case 'MINE FLAGGED': 
      let flag = state.mines -= 1
      return {...state, mines: flag }
    default:
      return state;
  }
};
