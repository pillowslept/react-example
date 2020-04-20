import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GENRES } from 'mocks/MovieData';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Genre.scss';

const styles = theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export class Genre extends Component {
  constructor() {
    super();
    this.state = {
      genre: null,
    };
  }
  componentDidMount () {
    const { genreId } = this.props.match.params;
    const genre = GENRES.find(({ id }) => id === Number(genreId));
    this.setState(() => ({ genre }));
  }
  render() {
    const { classes } = this.props;
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
            <b>Created at:</b> <span>{ genre.createdAt }</span>
          </div>
        </div>
        <hr></hr>
        <Link className="btn default-btn" to="/genres">Genres</Link>
        <div className={classes.root}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.small} />
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />
        </div>
      </div>
    );
  }
}

Genre.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(Genre);
