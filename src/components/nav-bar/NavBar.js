import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="title">Movies/Genres</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/genres">Genres</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
