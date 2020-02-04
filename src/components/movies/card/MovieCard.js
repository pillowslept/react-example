import React, { Component } from 'react';
import './MovieCard.scss';

export class MovieCard extends Component {
  createGenreTag = tag => {
    return (
      <span key={tag.id} className="genre">{ tag.name }</span>
    )
  }
  render() {
    const movie = this.props.entry || {}
    const genres = movie.genres || []
    const listGenres = genres.map(this.createGenreTag)

    return (
      <div key={movie.id} className="card movie-card">
        <div className="description">
          <div className="detail-info">
            <b>Title:</b> <span>{ movie.title }</span>
          </div>
          <div className="detail-info">
            <b>Company:</b> <span>{ movie.company.name }</span>
          </div>
          <div className="detail-info">
            <b>Date:</b> <span>{ movie.date }</span>
          </div>
        </div>
        <hr></hr>
        <div className="genres">
          {listGenres}
        </div>
      </div>
    );
  }
}

export default MovieCard;
