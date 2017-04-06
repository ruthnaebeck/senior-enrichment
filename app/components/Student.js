import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Student extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const student = this.props.student;
    return(
      <div>
        <h3>Student: { student.name }</h3>
        <h3>Campus: <Link to={'/campus/' + student.campus.id}>
            {student.campus.name}</Link></h3>
        <h4>Email: {student.email }</h4>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ student }) => ({ student });
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Student mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Student);
