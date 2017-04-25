/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';


const styles = {
  container: {
    textAlign: 'center',
    alignItem: 'center',
    paddingTop: '15%',
    paddingBottom: '12%',
    overflowY: 'auto',
    //backgroundImage: 'url("images/hourglass.gif")',
    backgroundColor: '#2E4053',
    color: "white"
  },
  raisedButtonStyle: {
    margin: ".5em",
    marginTop: '3em'
  },
  textButtonStyle: {
    color: "white"
  },
  processStyle: {
    alignItem: 'center',
    textAlign: 'center',
  },
  logoStyle: {
    marginTop: '2em',
    marginBottom: '2em'
  },
  floatingLabelFocusStyle: {
    color: "red"
  },
  inputStyle: {
    color: "white"
  }
};


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  handleClick(e) {
    e.preventDefault();
    this.context.router.push('/Home.js')
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }
  onSubmit() {


  }
  render() {
    const standardActions = (
      <FlatButton
        label="Yes"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (

      <div style={styles.container}>
        <div style={styles.logoStyle}>
          <img src='images/phonebook.png' />
        </div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <TextField
            inputStyle={styles.inputStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textButtonStyle}
            hintText="User Name"
            floatingLabelText="User Name"
            floatingLabelFixed={true}
          /><br />
          <TextField
            inputStyle={styles.inputStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br />
        </form>
        <Dialog
          open={this.state.open}
          title="Kumar Sourabh patel"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
          style={styles.processStyle}
        >
          <CircularProgress size={2} thickness={5} />
        </Dialog>
        <br /><br />
        <RaisedButton
          label="Login"
          style={styles.raisedButtonStyle}
          secondary={true}
          onTouchTap={this.handleClick}
        />
        <RaisedButton
          label="Forgate Password"
          style={styles.raisedButtonStyle}
          secondary={true}
          onTouchTap={this.handleTouchTap}
        />
        <br /><br />
      </div>

    );
  }
}

export default Main;
