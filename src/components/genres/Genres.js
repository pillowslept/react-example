import React, { Component } from 'react';
import GenreCard from 'components/genres/card/GenreCard';
import { GENRES } from 'mocks/MovieData';
import Grid from '@material-ui/core/Grid';

export class Genres extends Component {
  constructor() {
    super()
    this.state = {
      genres: GENRES,
    }
  }
  createCard = genre => {
    return (
      <GenreCard key={genre.id} entry={genre}/>
    )
  }
  render() {
    const genres = this.state.genres || []
    const cards = genres.map(this.createCard)

    return (
      <Grid
        container
        spacing={2}>
        {cards}
      </Grid>
    );
  }
}

export default Genres;
