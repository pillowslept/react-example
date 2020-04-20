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
import { withSnackbar } from 'notistack';

export class CreateCompany extends Component {
  constructor() {
    super();
    this.state = {
      company: {
        name: '',
        since: '',
      },
    };
    this.process = this.process.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  process() {
    fetch(`${HOST_API_URL}/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.company),
    })
      .then(() => {
        this.props.enqueueSnackbar('Successfully', { variant: 'success' });
        this.props.openCloseModal();
      })
      .catch(() => {
        this.props.enqueueSnackbar('There was an error executing the action', { variant: 'error' });
      });
  }
  handleChange(event, field) {
    this.setState({ company: { ...this.state.company, [field]: event.target.value } });
  }
  render() {
    const { isOpen, openCloseModal } = this.props;
    const width = 'xs';
    const isValid = !!this.state.company.name && !!this.state.company.since;

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
            value={this.state.since} onChange={(event) => this.handleChange(event, 'since')}
            margin="dense"
            id="since"
            label="Since (year) (*)"
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

CreateCompany.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openCloseModal: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(CreateCompany);
