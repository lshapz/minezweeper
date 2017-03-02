export const endGame = () => {
  return {
    type: 'WON GAME'
  };
}

export const takeTurn = () => {
  return {
    type: 'FIRST TURN'
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

let defaultState = {playing: false, lost: false, won: false}

export const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FIRST TURN':
      return {...state, playing: true}
    case 'WON GAME':
      console.log("game over, you win")
      return {...state, playing: false, won: true }
    case 'LOST GAME': 
      console.log("game over, you lose")
      return {...state, lost: true, playing: false}
    case 'RESET GAME':
      console.log("off to the races")
      return defaultState
    default:
      return state;
  }
};
