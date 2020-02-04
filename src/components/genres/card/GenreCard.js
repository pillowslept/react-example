import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './GenreCard.scss';

export class GenreCard extends Component {
  render() {
    const genre = this.props.entry || {}

    return (
      <div className="card genre-card">
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
          <Link className="btn default-btn" to={ `/genres/${genre.id}` }>View detail</Link>
        </div>
      </div>
    );
  }
}

export default GenreCard;
