const INITIAL_STATE = {
  color:'#1890FF'
}

const selectcolorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SELECT_COLOR':
      return {
        ...state,
        color:action.payload
      }
    default:
      return state;
  }
}

export default selectcolorReducer; 