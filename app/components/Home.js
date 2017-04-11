import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { seedData } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      seedDisplay: { display: 'none' }
    };
    this.seedDatabase = this.seedDatabase.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps){
    if(!newProps.campuses.length){
      this.setState({
        seedDisplay: {}
      });
    }
  }

  render(){
    const campuses = this.props.campuses;
    const seed = this.state.seedDisplay;
    return(
      <div>
        <center>
          <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
          {campuses.map(campus =>
            <div
              className="col-xs-6 col-xs-12"
              key={campus.id}>
              <Link to={'/campus/' + campus.id}>
                <img src={campus.image.length ?
                  campus.image : '/images/NoImage.png'} />
              </Link>
              <h4>{campus.name}</h4>
              <br />
            </div>
          )}
          <div style={seed}>
            <button
              onClick={this.seedDatabase}>
              Seed Database
            </button>
          </div>
        </center>
      </div>
    );
  }

  seedDatabase(evt){
    evt.preventDefault();
    this.props.seedData();
    console.log(this.props);
    this.setState({
      seedDisplay: { display: 'none' }
    });
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ campuses }) => ({ campuses });
const mapDispatch = { seedData };

export default connect(mapStateToProps, mapDispatch)(Home);
