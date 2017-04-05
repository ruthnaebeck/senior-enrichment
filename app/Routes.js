import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import Campus from './components/Campus';
import { fetchCampuses } from './reducers/campus';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ Root } onEnter={ fetchData }>
      <IndexRoute component={ Home } />
      <Route path="campuses" component={ Campus } />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchCampuses());
  }
});

export default connect(mapStateToProps, mapDispatch)(Routes);
