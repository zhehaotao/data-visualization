import {combineReducers} from 'redux';

import worksheetReducer from './worksheet/worksheet.reducer';
import stepReducer from './step/step.reducer';

export default combineReducers({
  worksheet: worksheetReducer,
  step: stepReducer
}) 