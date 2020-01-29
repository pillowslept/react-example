import React, { Component } from 'react';
import GenreList from 'components/genres/list/GenreList';
import './Genres.css';
import { GENRES } from 'mocks/MovieData';

export class Genres extends Component {
  constructor() {
    super()
    this.state = {
      genres: GENRES,
    }
  }
  render() {
    return (
      <div className="cardGenres">
        <GenreList entries={this.state.genres} />
      </div>
    );
  }
}

export default Genres;
