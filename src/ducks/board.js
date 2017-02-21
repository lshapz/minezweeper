import Gridmaker from '../components/flexfield'
import {mineCount} from './game'

export const flagSquare = (row, column) =>{
  return {type: 'FLAG SQUARE', payload: [row, column]}
}


export const clickSquare = (row, column) =>{
  return {type: 'CLICK SQUARE', payload: [row, column]}
}


export const clickedSquare = (row, column, count) =>{
  return {type: 'CLICKED SQUARE', payload: [row, column, count]}
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
    case 'CLICKED SQUARE':
      let clicked_state = clickingMe(action.payload, state)
      return clicked_state;
    default:
      return state;
  }
};

const clickingMe = (array, state) => {
  let square = state[array[0]][array[1]]
  let row = array[0]
  let column = array[1]
  let number = array[2]
  let count = 0
  let newClickers = []
  let neighbors = [
                [row-1, column-1], [row-1, column], [row-1, column+1], 
                [row, column-1], [row, column+1],
                [row+1, column-1], [row+1, column], [row+1, column+1]
                ]
  neighbors.forEach(subArray=>{
    if (state[subArray[0]] && state[subArray[0][subArray[1]]] && state[subArray[0][subArray[1]]].clicked !== false && state[subArray[0][subArray[1]]].flagged !== true){
      newClickers.push(subArray)
    }
    else if (state[subArray[0]] && state[subArray[0][subArray[1]]] && state[subArray[0][subArray[1]]].clicked !== false && state[subArray[0][subArray[1]]].flagged === true){
      count +=1 
    }
  })

  if (count === number){
    newClickers.forEach(item=>{
      clickedMe(item)
    })

  }


}


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
