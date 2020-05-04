export const nextStep = () => ({
  type:'NEXT_STEP'
}); 

export const jumpToStep = (current) => ({
  type:'JUMP_TO_STEP',
  payload: current
}); 