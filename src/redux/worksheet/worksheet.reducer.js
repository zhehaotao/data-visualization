const INITIAL_STATE = {
  data: []
}

const worksheetReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'PARSE_EXCEL':
      return {
        ...state,
        data:action.payload
      }
    default:
      return state;
  }
}

export default worksheetReducer; 