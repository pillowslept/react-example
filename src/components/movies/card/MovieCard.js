import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { MAIN_COLOR, WHITE_COLOR } from 'constants/Colors';

const styles = theme => ({
  grid: {
    height: '100%',
  },
  subtitle: {
    fontSize: 14,
  },
  chip: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    '& > *': {
      marginRight: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      background: MAIN_COLOR,
      color: WHITE_COLOR,
    },
  },
  actionButtons: {
    float: 'right',
  },
});

export class MovieCard extends Component {
  createGenreChip = tag => {
    return (
      <Chip key={tag.id} label={ tag.name } />
    )
  }
  render() {
    const { classes } = this.props;
    const movie = this.props.entry || {}
    const genres = movie.genres || []
    const listGenres = genres.map(this.createGenreChip)

    return (
      <Grid item xs={6} md={4} lg={3}>
        <Card className={classes.grid} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {movie.name}
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary">
              {movie.state}
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary">
              {movie.createdAt}
            </Typography>
            <Divider />
            <div className={classes.chip}>
              {listGenres}
            </div>
            <Divider />
          </CardContent>
          <CardActions className={classes.actionButtons}>
            <Button variant="outlined" color="default" size="small"
              endIcon={<Icon>send</Icon>}
              component={Link}
              to={`/movies/${movie.id}`}>View detail</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
