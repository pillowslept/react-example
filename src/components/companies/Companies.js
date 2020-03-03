import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HOST_API_URL } from 'constants/Environment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

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
  render() {
    const { classes } = this.props;
    const companies = this.state.companies || []

    return (
      <Grid
        container
        spacing={2}>
        <Grid item xs={12} className={classes.actions}>
          <Button variant="contained" size="small"
            endIcon={<Icon>plus_one</Icon>}>Create</Button>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Since</TableCell>
                  <TableCell>Created at</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {companies.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.since}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit" aria-label="add">
                        <IconButton aria-label="delete" size="small">
                          <Icon>edit</Icon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" aria-label="add">
                        <IconButton aria-label="delete" size="small">
                          <Icon>delete</Icon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
}

Companies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Companies);
