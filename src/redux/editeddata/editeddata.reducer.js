const INITIAL_STATE = {
  editeddata:[]
}

const editeddataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'EDIT_DATA':
      return {
        ...state,
        editeddata:action.payload
      }
    default:
      return state;
  }
}

export default editeddataReducer; 