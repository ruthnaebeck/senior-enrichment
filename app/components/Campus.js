import React from 'react';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class Campus extends React.component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({ campus: '' });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Campus);
