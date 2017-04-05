import React from 'react';

/* -----------------    COMPONENT     ------------------ */

const Navbar = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">MHI Academy</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Campuses</a></li>
        <li><a href="#">Students</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
