import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOST_API_URL } from 'constants/Environment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';

export class CreateGenre extends Component {
  constructor() {
    super();
    this.state = {
      genre: {
        name: '',
      },
    };
    this.process = this.process.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  process() {
    fetch(`${HOST_API_URL}/genre`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.genre),
    })
      .then(() => {
        this.props.openCloseModal();
      })
      .catch(console.log);
  }
  handleChange(event) {
    this.setState({ genre: { name: event.target.value } });
  }
  render() {
    const { isOpen, openCloseModal } = this.props;
    const width = 'xs';

    return (
      <Dialog
        fullWidth
        maxWidth={width}
        open={isOpen}
        onClose={openCloseModal}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            value={this.state.name} onChange={this.handleChange}
            margin="dense"
            id="name"
            label="Genre name"
            type="text"
            fullWidth
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={openCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={this.process} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CreateGenre.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openCloseModal: PropTypes.func.isRequired,
};

export default CreateGenre;
