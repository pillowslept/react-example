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
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
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

export class CompanyCard extends Component {
  render() {
    const { classes } = this.props;
    const company = this.props.entry || {}

    return (
      <Grid item xs={6} md={4} lg={3}>
        <Card className={classes.grid} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {company.name}
            </Typography>
            <Divider />
            <Typography className={classes.subtitle} color="textSecondary">
              {company.id}
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary">
              {company.since}
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary">
              {company.createdAt}
            </Typography>
            <Divider />
          </CardContent>
          <CardActions className={classes.actionButtons}>
            <Button variant="outlined" color="default" size="small"
              endIcon={<Icon>send</Icon>}
              component={Link}
              to={`/companies/${company.id}`}>View detail</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

CompanyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyCard);
