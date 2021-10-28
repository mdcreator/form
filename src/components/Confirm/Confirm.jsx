import React, { Component } from 'react';
// import { createTheme } from '@mui/material/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
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
    //PROCESS FORM
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />

          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>

          <br />
          <Button
            // variant="outlined"
            // color="primary"
            label="Confirm & Continue"
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
