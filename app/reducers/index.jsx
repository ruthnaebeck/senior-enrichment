import { combineReducers } from 'redux';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer

import campus from './campus';
import student from './student';

export default combineReducers({ campus, student });
