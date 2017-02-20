import Gridmaker from '../components/flexfield'
import {mineCount} from './game'

// export const defineSquare = (input) => {
//   return {type: 'NEW SQUARE', payload: input }
// }


export const flagSquare = (row, column) =>{
  return {type: 'FLAG SQUARE', payload: [row, column]}
}


export const clickSquare = (row, column) =>{
  
  return {type: 'CLICK SQUARE', payload: [row, column]}
}

let grid = Gridmaker(8, 8)

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
    // case 'NEW SQUARE':
    //   return state.concat(action.payload)
    case 'FLAG SQUARE':
      // let foo = state.filter((item)=>{
      //   return item.filter((objects)=>
      //     {
      //       return objects.row === action.payload[0] && objects.column === action.payload[1]})})
      let foo = state[action.payload[0]-1][action.payload[1]-1]

      let flag_state =  state.map(item=>{
        return item.map(next=>{
            if (next === foo)
              {
                next.flag = !next.flag}
            return next
            })
        })
      debugger
      return flag_state;
    case 'CLICK SQUARE':
      // let bar = state.forEach((item)=>{
      //   return item.filter((objects)=>{

      //     return objects.row === action.payload[0] && objects.column === action.payload[1]})})
      let bar = state[action.payload[0]-1][action.payload[1]-1]
      let click_state =  state.map(item=>{
        return item.map(next=>{
            if (next == bar)
              {
                next.clicked = true}
            return next
            })
        })
      if (click_state === state)
        {console.log('whoops')}
      
      return click_state;
    default:
      return state;
  }
};