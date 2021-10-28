import React, { Component } from 'react';
// import { createTheme } from '@mui/material/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
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

export default class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <Button
            // variant="outlined"
            // color="primary"
            label="Continue"
            primery={true}
            style={styles.button}
            onClick={this.continue}
          />
          <Button
            // variant="outlined"
            // color="primary"
            label="Back"
            primery={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
