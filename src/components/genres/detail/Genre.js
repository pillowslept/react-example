import React, { Component } from 'react';
import { GENRES } from 'mocks/MovieData';
import { Link } from "react-router-dom";
import './Genre.css';

export class Genre extends Component {
  constructor() {
    super()
    this.state = {
      genre: null,
    }
  }
  componentDidMount () {
    const { genreId } = this.props.match.params
    const genre = GENRES.find(({ id }) => id === Number(genreId));
    this.setState(() => ({ genre }))
  }
  render() {
    const genre = this.state.genre || {};

    return (
      <div className="genre-detail">
        <h3>Detailed information</h3>
        <hr></hr>
        <div className="information">
          <div className="detail-info">
            <b>ID:</b> <span>{ genre.id }</span>
          </div>
          <div className="detail-info">
            <b>Name:</b> <span>{ genre.name }</span>
          </div>
          <div className="detail-info">
            <b>Movies:</b> <span>{ genre.movies }</span>
          </div>
        </div>
        <hr></hr>
        <Link className="btn default-btn" to="/genres">Genres</Link>
      </div>
    );
  }
}

export default Genre;
