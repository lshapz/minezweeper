import Gridmaker from '../components/flexfield'
import {mineCount} from './game'
import image0 from '../components/images/0.png'
import image1 from '../components/images/1.png'
import image2 from '../components/images/2.png'
import image3 from '../components/images/3.png'
import image4 from '../components/images/4.png'
import image5 from '../components/images/5.png'
import image6 from '../components/images/6.png'
import image7 from '../components/images/7.png'
import image8 from '../components/images/8.png'
import imageX from '../components/images/X.png'
import imageflag from '../components/images/flag.png'
import imagemine from '../components/images/mine.png'



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

      let click_state = clickedMe(action.payload, state)
      
      return click_state;
    default:
      return state;
  }
};



var clickedMe = (array, state) => { 
  // debugger
      let bar = state[array[0]][array[1]]

      let click_state =  state.map(item=>{
        return item.map(next=>{
            if (bar === next)
              {next.clicked = true
              
              }
             
            return next
            })
        })

      return click_state
}
