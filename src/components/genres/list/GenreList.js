import React, { Component } from 'react';
import './GenreList.css';

export class GenreList extends Component {
  createGenreCard = genre => {
    return (
      <div key={genre.id} className="card">
        <div className="description">
          <div className="detail-info">
            <b>ID:</b> <span>{ genre.id }</span>
          </div>
          <div className="detail-info">
            <b>Name:</b> <span>{ genre.name }</span>
          </div>
          <div className="detail-info">
            <b>Movies:</b> <span>{ genre.movies }</span>
          </div>
          <hr></hr>
          <button>View detail</button>
        </div>
      </div>
    )
  }
  render() {
    const genres = this.props.entries || []
    const listGenres = genres.map(this.createGenreCard)

    return (
      listGenres
    );
  }
}

export default GenreList;
