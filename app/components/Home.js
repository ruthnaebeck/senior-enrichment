import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Home = (props) => (
  <div>
    <center>
      <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
      {props.campuses.map(campus =>
        <div
          className="col-xs-6 col-xs-12"
          key={campus.id}>
          <Link to={'/campus/' + campus.id}>
            <img src={campus.image.length ?
              campus.image : '/images/NoImage.png'} />
          </Link>
          <h4>{campus.name}</h4>
          <br />
        </div>
      )}
    </center>
  </div>
);

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (campuses) => (campuses);
const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Home);
