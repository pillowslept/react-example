import React, { Component } from 'react';
import MovieList from 'components/movies/list/MovieList';
import './Movies.css';
import { MOVIES } from 'mocks/MovieData';

export class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: MOVIES,
    }
  }
  render() {
    return (
      <div className="cardMovies">
        <MovieList entries={this.state.movies} />
      </div>
    );
  }
}

export default Movies;
