import { combineReducers } from 'redux';

import campuses from './campuses';
import campus from './campus';
import students from './students';

export default combineReducers({ campuses, campus, students });
