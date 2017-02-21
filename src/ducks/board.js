import Gridmaker from '../components/flexfield'
import {mineCount} from './game'

export const flagSquare = (row, column) =>{
  return {type: 'FLAG SQUARE', payload: [row, column]}
}


export const clickSquare = (row, column) =>{
  return {type: 'CLICK SQUARE', payload: [row, column]}
}

let grid = Gridmaker(12, 12)

function countMines(){
  return function(dispatch, grid){
    grid.forEach ((item)=>{
      item.forEach((further)=>{
          if (further.text === "mine"){
            dispatch(mineCount())
          }
      })
    })}
  }

export const gridReducer = (state = grid, action) => {
  switch (action.type) {
    case 'FLAG SQUARE':
      let flag_state =  flaggedMe(action.payload, state)
      return flag_state;
    case 'CLICK SQUARE':
      let click_state = clickedMe(action.payload, state)
      return click_state;
    default:
      return state;
  }
};


const flaggedMe = (array, state) => {
    let square = state[array[0]][array[1]]
    let flag_state =  state.map(item=>{
          return item.map(next=>{
            if (next === square)
                {next.flag = !next.flag}
              return next
              })
          })
        return flag_state;

} 

const clickedMe = (array, state) => { 
      let square = state[array[0]][array[1]]
      let click_state =  state.map(item=>{
        return item.map(next=>{
            if (square === next)
              {next.clicked = true}
            return next
            })
        })
      return click_state
}
