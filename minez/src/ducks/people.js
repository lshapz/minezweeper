

export const addPerson = (person) => {
  return {
    type: 'ADD PERSON',
    person
  };
}


export const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};
