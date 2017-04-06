import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const students = this.props.student;
    console.log('students', students);
    return(
      <div>
        <h2>{ this.props.campus[0].name } Campus</h2>
        <ol>
          {students.map(student =>
            <li key={student.id}>
            <Link to={'/campus/' + student.id}>
              {student.name}</Link></li>)}
        </ol>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ campus, student }) => ({ campus, student });
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Campus mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Campus);
