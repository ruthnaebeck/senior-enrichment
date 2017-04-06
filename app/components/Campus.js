import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.campus);
    const students = this.props.campus.students || [];
    return(
      <div>
        <h2>{ this.props.campus.name } Campus</h2>
        <ol>
          {students.map(student =>
            <li key={student.id}>
            <Link to={'/student/' + student.id}>
              {student.name}</Link></li>)}
        </ol>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

// ***Need to figure out selectedCampus

const mapStateToProps = ({ campus, student }) => ({ campus, student });
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Campus mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Campus);
