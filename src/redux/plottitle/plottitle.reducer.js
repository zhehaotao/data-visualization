const INITIAL_STATE = {
  plottitle: []
}

const plottitleReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'EDIT_TITLE':
      return {
        ...state,
        plottitle:action.payload
      }
    default:
      return state;
  }
}

export default plottitleReducer; 