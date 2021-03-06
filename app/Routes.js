import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root';
import Home from './components/Home';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import Students from './components/Students';
import Student from './components/Student';

import { fetchCampuses } from './reducers/campuses';
import { fetchCampus } from './reducers/campus';
import { fetchStudents } from './reducers/students';
import { fetchStudent } from './reducers/student';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchData, onCampusEnter, onStudentEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ Root }
      onEnter={ fetchData }>
      <IndexRoute component={ Home } />
      <Route path="campuses" component={ Campuses } />
      <Route path="campus/:id" component={ Campus }
        onEnter={ onCampusEnter } />
      <Route path="students" component={ Students } />
      <Route path="student/:id" component={ Student }
        onEnter={ onStudentEnter } />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  },
  onCampusEnter: (nextRouterState) => {
    const campusId = nextRouterState.params.id;
    dispatch(fetchCampus(campusId));
  },
  onStudentEnter: (nextRouterState) => {
    const studentId = nextRouterState.params.id;
    dispatch(fetchStudent(studentId));
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);
