import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import brace from 'brace';
import Paper from 'material-ui/Paper';
 
import 'brace/mode/java';
import 'brace/theme/github';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarCD from './AppBarCD';

import Editor from './Editor';
 

class App extends Component {


 onChange(newValue) {
  console.log('change',newValue);
}
  render() {

    const style={
      display: 'inline-block',
      width: 'auto',
    }

    return (
      <MuiThemeProvider>
      <div className="App">
      <AppBarCD/>
      <div style={style}>
      <Paper zDepth={1} style={{
        float:'left',
        width:'40vw',
        height:'80vh'
      }}>

        <span value="ramu"/>
  </Paper>
      <Paper zDepth={1} style={{
        float:'right',
        width:'58vw',
        height:'88vh'
      }}>

        <Editor/>
  </Paper>
  </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
