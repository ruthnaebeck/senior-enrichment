import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addStudent, removeStudent } from '../reducers/students';


/* -----------------    COMPONENT     ------------------ */

class Students extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedCampus: ''
    };

    this.addSubmit = this.addSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeSubmit = this.removeSubmit.bind(this);
  }

  render(){
    const students = this.props.students;
    const campuses = this.props.campuses;
    let selectedCampus = this.state.selectedCampus;
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
              <td>
                <Link to={'/campus/' + student.campusId}>
                  {student.campus ? student.campus.name : selectedCampus}
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-pencil" />
                </button></td>
              <td>
                <button
                  className="btn btn-default btn-xs"
                  onClick={this.removeSubmit}>
                  <span
                    id={student.id}
                    className="glyphicon glyphicon-trash" />
                </button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <form onSubmit={this.addSubmit}>
          <input name="name" placeholder="Student Name" />
          <br />
          <input name="email" placeholder="Student Email" />
          <br />
          <select
          name="campus"
          onChange={this.handleChange} >
              <option>Select Campus</option>
            {campuses.map(campus =>
              <option key={campus.id}>
                {campus.name}</option>
            )}
          </select>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }

  handleChange(evt){
    this.setState({ selectedCampus: evt.target.value });
  }

  addSubmit(evt) {
    evt.preventDefault();
    const campusId = this.props.campuses.find(campus =>
      campus.name === this.state.selectedCampus
    ).id;
    const student = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      campusId: campusId,
    };
    this.props.addStudent(student);
    evt.target.name.value = '';
    evt.target.email.value = '';
    evt.target.campus.value = 'Select Campus';
  }

  removeSubmit(evt) {
    evt.stopPropagation();
    this.props.removeStudent(Number(evt.target.id));
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (students) => (students);
const mapDispatch = { addStudent, removeStudent };

export default connect(mapStateToProps, mapDispatch)(Students);
