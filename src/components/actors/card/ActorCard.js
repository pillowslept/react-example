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
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  avatar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  grid: {
    height: '100%',
  },
  subtitle: {
    fontSize: 14,
  },
  actionButtons: {
    float: 'right',
  },
});

export class ActorCard extends Component {
  render() {
    const { classes } = this.props;
    const actor = this.props.entry || {}

    return (
      <Grid item xs={6} md={4} lg={3}>
        <Card className={classes.grid} variant="outlined">
          <CardContent>
            <div className={classes.avatar}>
              <Avatar alt={actor.name} src={actor.picture} className={classes.large} />
              <Typography variant="h5" component="h2">
                {actor.name}
              </Typography>
            </div>
            <Divider />
            <Typography className={classes.subtitle} color="textSecondary">
              {actor.birthplace}
            </Typography>
          </CardContent>
          <CardActions className={classes.actionButtons}>
            <Button variant="outlined" color="default" size="small"
              endIcon={<Icon>send</Icon>}
              component={Link}
              to={`/actor/${actor.id}`}>View detail</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

ActorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActorCard);
