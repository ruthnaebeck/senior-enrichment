import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateStudent } from '../reducers/student';


/* -----------------    COMPONENT     ------------------ */

class Student extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      student: {
        name: '',
        email: '',
        campusId: 0,
        campus: { name: ''}
      },
      view: {},
      edit: { display: 'none' }
    };
    this.updateSubmit = this.updateSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.editStudent = this.editStudent.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps){
    this.setState({
      student: newProps.student
    });
  }

  render(){
    const student = this.state.student;
    const campuses = this.props.campuses || [];
    let edit = this.state.edit;
    let view = this.state.view;
    return(
      <div>
        <div className="viewStudent" style={view}>
          <h3>Student: { student.name } <button
              onClick={this.editStudent}
              className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-pencil" />
          </button>
          </h3>
          <h3>Campus: <Link
            to={'/campus/' + student.campusId}>
            {student.campus.name}</Link>
          </h3>
          <h4>Email: {student.email }</h4>
        </div>
        <div className="editStudent" style={edit}>
          <h3>Edit Student</h3>
          <form onSubmit={this.updateSubmit}>
          <input
            name="name"
            value={ student.name }
            onChange={evt =>
              this.onUpdate({ name: evt.target.value })}
            />
          <br />
          <input
            name="email"
            placeholder="Add Email"
            value={ student.email }
            onChange={evt =>
              this.onUpdate({ email: evt.target.value })}
            />
          <br />
          <select
            name="campus"
            onChange={evt =>
              this.onUpdate({ campus:
                { name: evt.target.value },
                campusId: campuses.find(campus =>
                    campus.name === evt.target.value).id
              })
            }>
            <option>{student.campus.name}</option>
            {campuses.map(campus =>
              <option key={campus.id} id={campus.id}>{campus.name}</option>).filter(obj =>
                +obj.key !== student.campus.id)}
          </select>
          <br />
          <button type="submit">Update Student</button>
        </form>
        </div>
      </div>
    );
  }

  updateSubmit(evt) {
    evt.preventDefault();
    const student = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      campusId: this.state.student.campusId
    };
    this.props.updateStudent(
      this.props.student.id, student);
    this.setState({
      view: {},
      edit: { display: 'none' }
    });
  }

  onUpdate(updateObj){
    const student = this.state.student;
    this.setState({
      campus: Object.assign(student, updateObj)
    });
  }

  editStudent(){
    this.setState({
      edit: {},
      view: { display: 'none' }
    });
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ student, campuses }) =>
  ({ student, campuses });
const mapDispatch = { updateStudent };

export default connect(mapStateToProps, mapDispatch)(Student);
