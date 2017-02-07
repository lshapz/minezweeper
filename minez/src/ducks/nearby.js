

export const findFriends = (indexArray) => {
  return {
    payload: indexArray, 
    type: 'FIND FRIENDS'
  };
}


export const nearReducer = (state = null, action) => {
  switch (action.type) {
    case 'FIND FRIENDS':
      debugger
      console.log(action.payload)
      // in this space, we are going to expose all nearby 0s and the rim of #s around it 

      return state;
    case 'ALL FLAGGED':
    // here, we will handle when the user clicks on a space 
    // that has the correct number of adjacent flags
    // by clicking that space they will expose the remaining neighbors 
    return state;
    default:
      return state;
  }
};


const friends = (index) => {


  // here we're going to find all the neighbor cells 
  // line-1 cell-1, line-1 cell, line-1 cell+1
  // line cell-1, line cell+1
  // line+1 cell-1, line+1 cell, line+1 cell+1
// then we are going to change their state to clicked 


}