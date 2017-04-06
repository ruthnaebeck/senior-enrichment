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
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Campus</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {students.map(student =>
            <tr key={student.id}>
              <td>{student.id}</td>
              <td><Link to={'/student/' + student.id}>
                {student.name}</Link></td>
              <td><Link to={'/campus/' + student.campus.id}>
                {student.campus.name}</Link></td>
                <td><button className="btn btn-default btn-xs"><span className="glyphicon glyphicon-pencil" /></button></td>
              <td><button className="btn btn-default btn-xs"><span className="glyphicon glyphicon-trash" /></button></td>
            </tr>
          )}
          </tbody>
        </table>
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
