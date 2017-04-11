import { combineReducers } from 'redux';

import campuses from './campuses';
import campus from './campus';
import students from './students';
import student from './student';
import home from './home';

export default combineReducers(
  { campuses, campus, students, student, home }
);
