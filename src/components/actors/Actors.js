import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HOST_API_URL } from 'constants/Environment';
import ActorCard from 'components/actors/card/ActorCard';
import CreateActor from 'components/actors/create/CreateActor';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = () => ({
  actions: {
    textAlign: 'right',
  },
});
export class Actors extends Component {
  constructor() {
    super()
    this.state = {
      actors: [],
      isOpen: false,
    }
    this.openCloseModal = this.openCloseModal.bind(this);
  }
  componentDidMount() {
    fetch(`${HOST_API_URL}/actor`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ actors: data })
      })
      .catch(console.log)
  }
  createCard = actor => {
    return (
      <ActorCard key={actor.id} entry={actor}/>
    )
  }
  openCloseModal() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }
  render() {
    const { classes } = this.props;
    const actors = this.state.actors || []
    const cards = actors.map(this.createCard)

    return (
      <React.Fragment>
        <Grid
          container
          spacing={2}>
            <Grid item xs={12} className={classes.actions}>
              <Button variant="contained" size="small" onClick={this.openCloseModal}
                endIcon={<Icon>plus_one</Icon>}>Create</Button>
            </Grid>
          {cards}
        </Grid>
        {this.state.isOpen &&
          <CreateActor isOpen={this.state.isOpen} openCloseModal={this.openCloseModal} />
        }
      </React.Fragment>
    );
  }
}

Actors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actors);