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

export class CreateActor extends Component {
  constructor() {
    super();
    this.state = {
      actor: {
        name: '',
        birthplace: '',
        picture: '',
      },
    };
    this.process = this.process.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  process() {
    fetch(`${HOST_API_URL}/actor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.actor),
    })
      .then(() => {
        this.props.openCloseModal();
      })
      .catch(console.log);
  }
  handleChange(event, field) {
    this.setState({ actor: { ...this.state.actor, [field]: event.target.value } });
  }
  render() {
    const { isOpen, openCloseModal } = this.props;
    const width = 'xs';
    const isValid = !!this.state.actor.name && !!this.state.actor.birthplace && !!this.state.actor.picture;

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
            value={this.state.name} onChange={(event) => this.handleChange(event, 'name')}
            margin="dense"
            id="name"
            label="Name (*)"
            type="text"
            fullWidth
            autoComplete="off"
          />
          <TextField
            value={this.state.birthplace} onChange={(event) => this.handleChange(event, 'birthplace')}
            margin="dense"
            id="birthplace"
            label="Birthplace (*)"
            type="text"
            fullWidth
            autoComplete="off"
          />
          <TextField
            multiline
            value={this.state.picture} onChange={(event) => this.handleChange(event, 'picture')}
            margin="dense"
            id="picture"
            label="Picture URL (*)"
            type="text"
            fullWidth
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={openCloseModal} color="primary">
            Cancel
          </Button>
          <Button disabled={!isValid} onClick={this.process} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CreateActor.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openCloseModal: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default CreateActor;
