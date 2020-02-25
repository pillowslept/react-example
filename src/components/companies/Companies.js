import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CompanyCard from 'components/companies/card/CompanyCard';
import { HOST_API_URL } from 'constants/Environment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = () => ({
  actions: {
    textAlign: 'right',
  },
});

export class Companies extends Component {
  constructor() {
    super()
    this.state = {
      companies: [],
    }
  }
  componentDidMount() {
    fetch(`${HOST_API_URL}/company`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ companies: data })
      })
      .catch(console.log)
  }
  createCard = movie => {
    return (
      <CompanyCard key={movie.id} entry={movie}/>
    )
  }
  render() {
    const { classes } = this.props;
    const companies = this.state.companies || []
    const cards = companies.map(this.createCard)

    return (
      <Grid
        container
        spacing={2}>
        <Grid item xs={12} className={classes.actions}>
          <Button variant="contained" size="small"
            endIcon={<Icon>plus_one</Icon>}>Create</Button>
        </Grid>
        {cards}
      </Grid>
    );
  }
}

Companies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Companies);
