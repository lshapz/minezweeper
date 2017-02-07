

export const endGame = () => {
  return {
    type: 'END GAME'
  };
}


export const gameReducer = (state = true, action) => {
  switch (action.type) {
    case 'END GAME':
      state = false
      console.log("game over")
      return state;
    default:
      return state;
  }
};
