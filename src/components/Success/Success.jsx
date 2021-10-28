import React, { Component } from 'react';
// import { createTheme } from '@mui/material/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import Button from '@mui/material/Button';

// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: '#64748B',
//       //   contrastText: '#fff',
//     },
//   },
// });

const styles = {
  button: {
    margin: 15,
  },
};

export default class Seccess extends Component {
  continue = e => {
    e.preventDefault();
    //PROCESS FORM
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    // const {
    //   values: { firstName, lastName, email, occupation, city, bio },
    // } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Seccess" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
