import React from 'react';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {console.log('Campus Props', this.props)}
        {console.log('Campus State', this.state)}
        <h2>MHI Academy Campuses</h2>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (campuses) => (campuses);
const mapDispatch = dispatch => ({
  logging: () => {
    console.log('logging in Campus mapDispatch');
  }
});

export default connect(mapStateToProps, mapDispatch)(Campus);
