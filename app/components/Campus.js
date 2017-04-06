import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const campuses = this.props.campus;
    return(
      <div>
        {campuses.forEach(campus => console.log('campus: ', campus.name))}
        <h2>MHI Academy Campuses</h2>
        {campuses.map(campus =>
          <h3 key={campus.id}>
          <Link to={'/campus/' + campus.id}>{campus.name}</Link></h3>)}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (campuses) => (campuses);
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Campus mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Campus);
