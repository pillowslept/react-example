import React, { Component } from 'react';
import './MovieList.css';

export class MovieList extends Component {
  createGenreTag = tag => {
    return (
      <span key={tag.id} className="genre">{ tag.name }</span>
    )
  }
  createMovieCard = movie => {
    const genres = movie.genres || []
    const listGenres = genres.map(this.createGenreTag)

    return (
      <div key={movie.id} className="card">
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
    )
  }
  render() {
    const movies = this.props.entries || []
    const listMovies = movies.map(this.createMovieCard)

    return (
      listMovies
    );
  }
}

export default MovieList;
