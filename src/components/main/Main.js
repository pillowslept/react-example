import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Companies from 'components/companies/Companies';
import Movies from 'components/movies/Movies';
import Genres from 'components/genres/Genres';
import Genre from 'components/genres/detail/Genre';
import Home from 'components/home/Home';
import './Main.css';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/genres/:genreId" component={Genre}/>
          <Route path="/companies">
            <Companies />
          </Route>
          <Route path="/genres">
            <Genres />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
