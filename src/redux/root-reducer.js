import {combineReducers} from 'redux';

import worksheetReducer from './worksheet/worksheet.reducer';

export default combineReducers({
  worksheet: worksheetReducer
}) 