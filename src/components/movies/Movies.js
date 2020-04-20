import React, { Component } from 'react';
import { HOST_API_URL } from 'constants/Environment';
import MovieCard from 'components/movies/card/MovieCard';
import Grid from '@material-ui/core/Grid';

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
    this.openCloseModal = this.openCloseModal.bind(this);
  }
  componentDidMount() {
    fetch(`${HOST_API_URL}/movie`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ movies: data });
      })
      .catch(console.log);
  }
  openCloseModal() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }
  createCard(movie) {
    return (
      <MovieCard key={movie.id} entry={movie}/>
    );
  }
  render() {
    const movies = this.state.movies || [];
    const cards = movies.map(this.createCard);

    return (
      <Grid
        container
        spacing={2}>
        {cards}
      </Grid>
    );
  }
}

export default Movies;
