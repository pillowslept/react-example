import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="title">Movies/Genres</div>
        <div>
          <Link className="btn white-btn" to="/">Home</Link>
          <Link className="btn white-btn" to="/movies">Movies</Link>
          <Link className="btn white-btn" to="/genres">Genres</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
