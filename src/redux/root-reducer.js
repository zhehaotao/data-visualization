import {combineReducers} from 'redux';

import worksheetReducer from './worksheet/worksheet.reducer';
import stepReducer from './step/step.reducer';
import fieldsReducer from './fields/fields.reducer';
import editeddataReducer from './editeddata/editeddata.reducer';
import plottitleReducer from './plottitle/plottitle.reducer';
import selectcolorReducer from './color/color.reducer';

export default combineReducers({
  worksheet: worksheetReducer,
  step: stepReducer,
  fields:fieldsReducer,
  editeddata:editeddataReducer,
  plottitle:plottitleReducer,
  color:selectcolorReducer
}) 