import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateStudent } from '../reducers/campus';


/* -----------------    COMPONENT     ------------------ */

class Student extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      student: {
        name: '',
        email: '',
        campus: {}
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
    return(
      <div>
        <h3>Student: { student.name }</h3>
        <h3>Campus: <Link to={'/campus/' + student.campus.id}>
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
          <select>
            <option>Update Campus</option>
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
      image: evt.target.email.value
    };
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

const mapStateToProps = ({ student }) => ({ student });
const mapDispatch = { updateStudent };

export default connect(mapStateToProps, mapDispatch)(Student);
