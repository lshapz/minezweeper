import Gridmaker from '../components/flexfield'

export const flagSquare = (row, column) =>{
  return {type: 'FLAG SQUARE', payload: [row, column]}
}


export const clickSquare = (row, column) =>{
  return {type: 'CLICK SQUARE', payload: [row, column]}
}

export const makeHard = (hardness) =>{
  return {type: 'CHANGE DIFFICULTY', payload: hardness}
}


// export const mineCount = (number) => {
//   return {type: 'COUNT MINES', payload: number};
// }

export const resetMines = () => {
  return {type: 'RESET MINES'}
}

export const flagCount = (flagged) => {
  return {type: 'MINE FLAGGED', payload: flagged.me.flag}
}



export const gridReducer = (state = {grid: [], mines: 0}, action) => {
  switch (action.type) {
    case 'RESET MINES':
      let mine = 0 
      return {...state, mines: 0}
    case 'MINE FLAGGED':
      let flag 
      if (action.payload === true)
        {flag = state.mines -= 1}
      else if (action.payload === false)
        {flag = state.mines += 1}
      return {...state, mines: flag }
    case 'CHANGE DIFFICULTY':
      let new_state = gridSizer(action.payload)
      return {...state, grid: new_state[0], mines: new_state[1]} 
    case 'FLAG SQUARE':
      let flag_state =  flaggedMe(action.payload, state)
      return {...state, grid: flag_state};
    case 'CLICK SQUARE':
      let click_state = clickedMe(action.payload, state)
      return {...state, grid: click_state};
    default:
      return state;
  }
};


const flaggedMe = (array, state) => {
    let square = state.grid[array[0]][array[1]]
    let flag_state =  state.grid.map(item=>{
          return item.map(next=>{
            if (next === square)
                {next.flag = !next.flag}
              return next
              })
          })
        return flag_state;

} 

const clickedMe = (array, state) => { 
      let square = state.grid[array[0]][array[1]]
      let click_state =  state.grid.map(item=>{
        return item.map(next=>{
            if (square === next)
              {next.clicked = true}
            return next
            })
        })
      return click_state
}


function gridSizer(difficulty){
  let grid
  switch(difficulty) {
    case 'easy':
      grid = Gridmaker(10, 10)
      break;
    case 'medium':
      grid = Gridmaker(16, 16)
      break;
    case 'hard':
      grid = Gridmaker(16, 32)
      break;
  }
  return grid
}

