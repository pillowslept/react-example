import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: '3rem',
  },
});

export class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3} >
          <MovieIcon className={classes.icon} />
          <b>Manage Movies</b>
        </Paper>
        <Paper className={classes.paper} elevation={3} >
          <ListAltIcon className={classes.icon} />
          <b>List Genres</b>
        </Paper>
        <Paper className={classes.paper} elevation={3} >
          <DoubleArrowIcon className={classes.icon} />
          <b>More...</b>
        </Paper>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
