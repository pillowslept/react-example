import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import * as serviceWorker from './serviceWorker';

const SNACK_OPTIONS = {
  vertical: 'bottom',
  horizontal: 'right',
}

ReactDOM.render(
  <SnackbarProvider maxSnack={2} duration={3000} anchorOrigin={SNACK_OPTIONS}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
