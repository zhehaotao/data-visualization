const INITIAL_STATE = {
  current: null
}

const stepReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'NEXT_STEP':
      return {
        ...state,
        current: state.current + 1
      }
    case 'JUMP_TO_STEP':
      return {
        ...state,
        current: action.payload
      }
    default:
      return state;
  }
}

export default stepReducer; 