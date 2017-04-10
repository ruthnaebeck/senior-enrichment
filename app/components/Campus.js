import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateCampus } from '../reducers/campus';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      campus: {
        name: '',
        image: '',
        students: []
      },
      view: {},
      edit: { display: 'none' }
    };
    this.updateSubmit = this.updateSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.editCampus = this.editCampus.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps){
    this.setState({
      campus: newProps.campus
    });
  }

  render(){
    const students = this.state.campus.students;
    const campus = this.state.campus;
    let edit = this.state.edit;
    let view = this.state.view;
    return(
      <div>
        <div className="viewCampus" style={view}>
          <h2>
            { campus.name } Campus <button
              onClick={this.editCampus}
              className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-pencil" />
          </button>
          </h2>
          <h4>Image: { campus.image }</h4>
          <ol>
            {students.map(student =>
              <li key={student.id}>
              <Link to={'/student/' + student.id}>
                {student.name}</Link></li>)}
          </ol>
        </div>
        <div className="editCampus" style={edit}>
          <h2>Edit Campus</h2>
          <form onSubmit={this.updateSubmit}>
          <input
            name="name"
            value={ campus.name }
            onChange={evt =>
              this.onUpdate({ name: evt.target.value })}
            />
          <br />
          <input
            name="image"
            placeholder="Add Image"
            value={ campus.image }
            onChange={evt =>
              this.onUpdate({ image: evt.target.value })}
            />
          <br />
          <button type="submit">Update Campus</button>
        </form>
        </div>
      </div>
    );
  }

  updateSubmit(evt) {
    evt.preventDefault();
    const campus = {
      name: evt.target.name.value,
      image: evt.target.image.value
    };
    this.props.updateCampus(this.props.campus.id, campus);
    this.setState({
      view: {},
      edit: { display: 'none' }
    });
  }

  onUpdate(updateObj){
    const campus = this.state.campus;
    this.setState({
      campus: Object.assign(campus, updateObj)
    });
  }

  editCampus(){
    this.setState({
      edit: {},
      view: { display: 'none' }
    });
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ campus, campuses }) => ({ campus, campuses });
const mapDispatch = { updateCampus };

export default connect(mapStateToProps, mapDispatch)(Campus);
