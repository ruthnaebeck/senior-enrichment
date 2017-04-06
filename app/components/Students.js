import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Students extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const students = this.props.students;
    return(
      <div>
        <h2>MHI Academy Students</h2>
        {students.map(student =>
          <h3 key={student.id}>
          <Link to={'/student/' + student.id}>
            {student.name}</Link></h3>)}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (students) => (students);
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in student mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Students);
