import React, { Component } from 'react';
import GenreCard from 'components/genres/card/GenreCard';
import { GENRES } from 'mocks/MovieData';

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
      <div className="cards">
        {cards}
      </div>
    );
  }
}

export default Genres;
