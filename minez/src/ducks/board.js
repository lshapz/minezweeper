export const defineSquare = (input) => {
  return {type: 'NEW SQUARE', payload: input }
}


export const gridReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW SQUARE': 
      debugger 
      return {...state }
    default:
      return state;
  }
};