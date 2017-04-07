import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      campusName: '',
      campusImage: ''
    };
  }

  render(){
    const students = this.props.campus.students;
    let campusName = this.props.campus.name;
    let campusImage = this.props.campus.image;
    return(
      <div>
        <h2>
          { campusName } Campus <button className="btn btn-default btn-xs">
          <span className="glyphicon glyphicon-pencil" />
        </button>
        </h2>
        <h4>Image Url: { campusImage }</h4>
        <ol>
          {students.map(student =>
            <li key={student.id}>
            <Link to={'/student/' + student.id}>
              {student.name}</Link></li>)}
        </ol>
        <div className="editCampus">
          <h4>Edit Campus</h4>
          <form onSubmit={this.updateSubmit}>
          <input name="name" value={ campusName } />
          <br />
          <input name="image" value={ campusImage } />
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
    console.log(campus);
    // this.props.addCampus(campus);
    // evt.target.name.value = '';
    // evt.target.image.value = '';
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ campus }) => ({ campus });
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Campus mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Campus);
