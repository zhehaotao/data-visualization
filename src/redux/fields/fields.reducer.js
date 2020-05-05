const INITIAL_STATE = {
  fields: []
}

const fieldsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SELECTED_FIELDS':
      return {
        ...state,
        fields:action.payload
      }
    default:
      return state;
  }
}

export default fieldsReducer; 