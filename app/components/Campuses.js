import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addCampus } from '../reducers/campuses';


/* -----------------    COMPONENT     ------------------ */

class Campuses extends React.Component{
  constructor(props){
    super(props);

    this.addSubmit = this.addSubmit.bind(this);
  }

  render(){
    const campuses = this.props.campuses;
    return(
      <div>
        <h2>MHI Academy Campuses</h2>
        {campuses.map(campus =>
          <h3 key={campus.id}>
          <Link to={'/campus/' + campus.id}>{campus.name}</Link></h3>)}
        <form onSubmit={this.addSubmit}>
          <input name="name" placeholder="Campus Name"></input><br />
          <input name="image" placeholder="Image URL"></input><br />
          <button type="submit">Add Campus</button>
        </form>
      </div>
    );
  }

  addSubmit(evt) {
    evt.preventDefault();
    const campus = {
      name: evt.target.name.value,
      image: evt.target.image.value
    };
    this.props.addCampus(campus);
    evt.target.name.value = '';
    evt.target.image.value = '';
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (campuses) => (campuses);
const mapDispatch = { addCampus };

export default connect(mapStateToProps, mapDispatch)(Campuses);
