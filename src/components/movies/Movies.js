import React, { Component } from 'react';
import MovieCard from 'components/movies/card/MovieCard';
import { MOVIES } from 'mocks/MovieData';

export class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: MOVIES,
    }
  }
  createCard = movie => {
    return (
      <MovieCard key={movie.id} entry={movie}/>
    )
  }
  render() {
    const movies = this.state.movies || []
    const cards = movies.map(this.createCard)

    return (
      <div className="cards">
        {cards}
      </div>
    );
  }
}

export default Movies;
