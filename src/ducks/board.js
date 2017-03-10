import Gridmaker from '../components/gridmaker'

export const flagSquare = (row, column) =>{
  return {
    type: 'FLAG SQUARE', 
    payload: [row, column]
  };
};

export const clickSquare = (row, column) =>{
  return {
    type: 'CLICK SQUARE', 
    payload: [row, column]
  };
};

export const makeHard = (hardness) =>{
  return {
    type: 'CHANGE DIFFICULTY', 
    payload: hardness
  };
};

export const resetMines = () => {
  return {
    type: 'RESET MINES'
  };
};

export const flagCount = (flagged) => {
  return {
    type: 'MINE FLAGGED', 
    payload: flagged
  };
};

const flaggedMe = (array, state) => {
  let [row, column] = array
  let flaggedSquare = state.grid[row][column]
  let flag_state =  state.grid.map(line=>{
    return line.map(gridSquare=>{
      if (gridSquare === flaggedSquare) {
        gridSquare.flag = !gridSquare.flag;
      }
      return gridSquare;
    })
  })
  return flag_state;
};

const clickedMe = (array, state) => { 
  let [row, column] = array
  let clickedSquare = state.grid[row][column]
  let click_state =  state.grid.map(line=>{
    return line.map(gridSquare=>{
      if (gridSquare === clickedSquare) {
        gridSquare.clicked = true;
      }
      return gridSquare;
    })
  })
  return click_state;
};


function gridSizer(difficulty){
  let grid;
  switch(difficulty) {
    case 'easy':
      grid = Gridmaker(12, 12);
      break;
    case 'medium':
      grid = Gridmaker(16, 16);
      break;
    case 'hard':
      grid = Gridmaker(16, 32);
      break;
    default: 
      grid = Gridmaker(12, 12);
  }
  return grid;
}


export const gridReducer = (state = {grid: [], mines: 0}, action) => {
  switch (action.type) {
    case 'RESET MINES':
      return {...state, mines: 0};
    case 'MINE FLAGGED':
      let flag = action.payload ? state.mines -= 1 : state.mines += 1;
      return {...state, mines: flag};
    case 'CHANGE DIFFICULTY':
      let [newGrid, newMines] = gridSizer(action.payload);
      return {...state, grid: newGrid, mines: newMines} 
    case 'FLAG SQUARE':
      let flag_state =  flaggedMe(action.payload, state);
      return {...state, grid: flag_state};
    case 'CLICK SQUARE':
      let click_state = clickedMe(action.payload, state);
      return {...state, grid: click_state};
    default:
      return state;
  }
};


