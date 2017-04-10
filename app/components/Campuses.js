import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addCampus, removeCampus } from '../reducers/campuses';


/* -----------------    COMPONENT     ------------------ */

class Campuses extends React.Component{
  constructor(props){
    super(props);

    this.addSubmit = this.addSubmit.bind(this);
    this.removeSubmit = this.removeSubmit.bind(this);
  }

  render(){
    const campuses = this.props.campuses;
    return(
      <div>
        <h2>MHI Academy Campuses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {campuses.map(campus =>
            <tr key={campus.id}>
              <td>{campus.id}</td>
              <td><Link to={'/campus/' + campus.id}>
                {campus.name}</Link></td>
              <td>
                <button className="btn btn-default btn-xs">
                <span className="glyphicon glyphicon-pencil" />
                </button>
              </td>
              <td>
                <button
                    className="btn btn-default btn-xs"
                    onClick={this.removeSubmit}>
                  <span
                    id={campus.id}
                    className="glyphicon glyphicon-trash" />
                </button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <form onSubmit={this.addSubmit}>
          <input name="name" placeholder="Campus Name" />
          <br />
          <input name="image" placeholder="Image URL" />
          <br />
          <button type="submit">Add Campus</button>
        </form>
      </div>
    );
  }

  addSubmit(evt) {
    evt.preventDefault();
    let name = evt.target.name.value;
    if(name.length){
      const campus = {
        name: name,
        image: evt.target.image.value
      };
      this.props.addCampus(campus);
      evt.target.name.value = '';
      evt.target.image.value = '';
    }else{
      alert('Please enter a campus name');
    }
  }

  removeSubmit(evt) {
    evt.stopPropagation();
    this.props.removeCampus(Number(evt.target.id));
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (campuses) => (campuses);
const mapDispatch = { addCampus, removeCampus };

export default connect(mapStateToProps, mapDispatch)(Campuses);
