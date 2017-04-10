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
      }
    };
    this.updateSubmit = this.updateSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps){
    this.setState({
      student: newProps.student
    });
  }

  render(){
    const student = this.state.student;
    const campuses = this.props.campuses || [];
    return(
      <div>
        <h3>Student: { student.name }</h3>
        <h3>Campus: <Link to={'/campus/' + student.campusId}>
            {student.campus.name}</Link></h3>
        <h4>Email: {student.email }</h4>
        <hr />
        <div className="editStudent">
          <h4>Edit Student</h4>
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
    console.log(student);
    this.props.updateStudent(
      this.props.student.id, student);
  }

  onUpdate(updateObj){
    const student = this.state.student;
    this.setState({
      campus: Object.assign(student, updateObj)
    });
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ student, campuses }) =>
  ({ student, campuses });
const mapDispatch = { updateStudent };

export default connect(mapStateToProps, mapDispatch)(Student);
