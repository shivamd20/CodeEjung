import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import brace from 'brace';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Editor from './Editor';
import {Launcher} from './react-chat-window';
import 'brace/mode/java';
import 'brace/theme/github';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
 
var messageHistory=[];

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {

  constructor(){
    super();
    this.state = {
      messageList: messageHistory
    };
  }

 onChange(newValue) {
  console.log('change',newValue);
}


_onMessageWasSent(message) {
  this.setState({
    messageList: [...this.state.messageList, message]
  })
}

_sendMessage(text) {
  if (text.length > 0) {
    this.setState({
      messageList: [...this.state.messageList, {
        author: 'them',
        type: 'text',
        data: { text }
      }]
    })
  }
}

  render() {

    return (
      <MuiThemeProvider>
      <div className="App">
      <div style={{
         display: 'inline-block',
      width: 'auto',
      }}>

      <AppBar
      zDepth={2}
    title={<span style={styles.title}>Title</span>}
    onTitleClick={handleClick}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />

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

      <Launcher style={{
        zDepth:99,
        float:'left',
      }}
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />

      </MuiThemeProvider>
      
    );
  }
}

export default App;
