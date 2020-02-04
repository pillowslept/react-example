import React, { Component } from 'react';
import NavBar from 'components/nav-bar/NavBar';
import Main from 'components/main/Main';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Main/>
        </Router>
      </div>
    );
  }
}

export default App;
