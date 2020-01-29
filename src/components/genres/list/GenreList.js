import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
          <Link to={ `/genres/${genre.id}` }>View detail</Link>
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
