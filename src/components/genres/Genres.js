import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GenreCard from 'components/genres/card/GenreCard';
import CreateGenre from 'components/genres/create/CreateGenre';
import { HOST_API_URL } from 'constants/Environment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = () => ({
  actions: {
    textAlign: 'right',
  },
});

export class Genres extends Component {
  constructor() {
    super()
    this.state = {
      genres: [],
      isOpen: false,
    }
    this.openCloseModal = this.openCloseModal.bind(this);
  }
  componentDidMount() {
    fetch(`${HOST_API_URL}/genre`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ genres: data })
      })
      .catch(console.log)
  }
  openCloseModal() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }
  createCard = genre => {
    return (
      <GenreCard key={genre.id} entry={genre}/>
    )
  }
  render() {
    const { classes } = this.props;
    const genres = this.state.genres || []
    const cards = genres.map(this.createCard)

    return (
      <div>
        <Grid
          container
          spacing={2}>
          <Grid item xs={12} className={classes.actions}>
            <Button variant="contained" size="small" onClick={this.openCloseModal}
              endIcon={<Icon>plus_one</Icon>}>Create</Button>
          </Grid>
          {cards}
        </Grid>
        <CreateGenre isOpen={this.state.isOpen} openCloseModal={this.openCloseModal} />
      </div>
    );
  }
}

Genres.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Genres);
