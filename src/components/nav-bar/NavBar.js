import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Sidenav from 'components/sidenav/Sidenav';
import Hidden from '@material-ui/core/Hidden';
import { MAIN_COLOR } from 'constants/Colors';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: MAIN_COLOR,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  }
});

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openCloseSidenav = this.openCloseSidenav.bind(this);
  }
  openCloseSidenav() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={this.openCloseSidenav}
              edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Hidden xsDown>
              <Typography variant="h6" className={classes.title}>
                Movies/Genres
              </Typography>
            </Hidden>
            <div>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/actors">Actors</Button>
              <Button color="inherit" component={Link} to="/companies">Companies</Button>
              <Button color="inherit" component={Link} to="/movies">Movies</Button>
              <Button color="inherit" component={Link} to="/genres">Genres</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Sidenav isOpen={this.state.isOpen} openCloseSidenav={this.openCloseSidenav} />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
