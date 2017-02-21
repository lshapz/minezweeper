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
      let foo = state[action.payload[0]][action.payload[1]]

      let flag_state =  state.map(item=>{
        return item.map(next=>{
            if (next === foo)
              {
                next.flag = !next.flag}
            return next
            })
        })
      // debugger
      return flag_state;
    case 'CLICK SQUARE':
      // let bar = state.forEach((item)=>{
      //   return item.filter((objects)=>{

      //     return objects.row === action.payload[0] && objects.column === action.payload[1]})})

      // debugger
      // let tried = []
    
      let click_state = clickedMe(action.payload, state)
      
      return click_state;
    default:
      return state;
  }
};

const clickedMe = (array, state) =>{
  // debugger
      let bar = state[array[0]][array[1]]
      let baz = [bar]

      if (bar.text === 0)
          {
              let row = array[0]
              let column = array[1]
              let neighbors = [
              [row-1, column-1], [row-1, column], [row-1, column+1], 
              [row, column-1], [row, column+1],
              [row+1, column-1], [row+1, column], [row+1, column+1]
              ]


      neighbors.forEach(arr=>
      {
      if (state[arr[0]] && state[arr[0]][arr[1]] && state[arr[0]][arr[1]].text !== 'mine')
      {
        baz.push(state[arr[0]][arr[1]])
      }
      })

      }
      

      let click_state =  state.map(item=>{
        return item.map(next=>{
            if (baz.includes(next))
              {next.clicked = true}
             
            return next
            })
        })

      return click_state
}
