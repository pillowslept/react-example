import React, { Component } from 'react';
import { HOST_API_URL } from 'constants/Environment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actor: {
    padding: 5,
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    '& > p': {
      marginLeft: '1rem'
    },
  },
});

export class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: [],
    }
  }
  componentDidMount() {
    fetch(`${HOST_API_URL}/actor/movie/${this.props.movie.id}`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({ actors: data })
      })
      .catch(console.log)
  }
  createActorPaper = (actor, classes) => {
    return (
      <Paper key={actor.id} variant="outlined" className={classes.actor}>
        <Avatar alt={actor.name} src={actor.picture} />
        <Typography color="textSecondary">{actor.name}</Typography>
      </Paper>
    )
  }
  render() {
    const { classes, isOpen, openCloseModal, movie } = this.props;
    const actors = (this.state.actors || []).map(actor => this.createActorPaper(actor, classes))
    const width = 'sm';

    return (
      <Dialog
        fullWidth
        maxWidth={width}
        open={isOpen}
        onClose={openCloseModal}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <div className={classes.title}>
            <span>{movie.name}</span> <b>2018</b>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Divider />
          <Typography color="textSecondary">
            <b>Company:</b> {movie.company.name}
          </Typography>
          <Typography color="textSecondary">
            <b>Release date:</b> {movie.createdAt}
          </Typography>
          <Typography color="textSecondary">
            <b>Box office:</b> $ 1350 billion
          </Typography>
          {!!actors.length && 
            <React.Fragment>
              <Typography color="textSecondary">
                <b>Actors:</b>
              </Typography>
              <div>
                {actors}
              </div>
            </React.Fragment>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={openCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

MovieDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetail);
