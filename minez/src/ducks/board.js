export const defineSquare = (input) => {
  return {type: 'NEW SQUARE', payload: input }
}

export const flagSquare = (row, column) =>{
  return {type: 'FLAG SQUARE', payload: [row, column]}
}


export const clickSquare = (row, column) =>{
  
  return {type: 'CLICK SQUARE', payload: [row, column]}
}


export const gridReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW SQUARE':
      return state.concat(action.payload)
    case 'FLAG SQUARE':
      let foo = state.filter(objects=>{return objects.row === action.payload[0] && objects.column === action.payload[1]})
      let flag_state =  state.map(item=>{
            if (item === foo[0])
              {item.flagged = !item.flagged}
            return item
            })
      return flag_state;
    case 'CLICK SQUARE':
      let bar = state.filter(objects=>{return objects.row === action.payload[0] && objects.column === action.payload[1]})
      let click_state =  state.map(item=>{
            if (item === bar[0])
              {item.clicked = true}
            return item
            })
      return click_state;
    default:
      return state;
  }
};