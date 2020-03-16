import React, { Component } from 'react';
import { HOST_API_URL } from 'constants/Environment';
import ActorCard from 'components/actors/card/ActorCard';
import Grid from '@material-ui/core/Grid';

export class Actors extends Component {
  constructor() {
    super()
    this.state = {
      actors: [],
    }
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
  render() {
    const actors = this.state.actors || []
    const cards = actors.map(this.createCard)

    return (
      <Grid
        container
        spacing={2}>
        {cards}
      </Grid>
    );
  }
}

export default Actors;
