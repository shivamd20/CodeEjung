
import React from 'react';
import AceEditor from 'react-ace';
import Subheader from 'material-ui/Subheader';
import MenuItem from    'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import 'brace/ext/language_tools';
import 'brace/ext/searchbox';


var input,classname;


const languages = [
    'javascript',
    'java',
    'python',
    'xml',
    'ruby',
    'sass',
    'markdown',
    'mysql',
    'json',
    'html',
    'handlebars',
    'golang',
    'csharp',
    'elixir',
    'typescript',
    'css'
  ]

  const themes = [
    'monokai',
    'github',
    'tomorrow',
    'kuroir',
    'twilight',
    'xcode',
    'textmate',
    'solarized_dark',
    'solarized_light',
    'terminal',
  ]

  
  languages.forEach((lang) => {
    require(`brace/mode/${lang}`)
    require(`brace/snippets/${lang}`)
  })


themes.forEach((theme) => {
    require(`brace/theme/${theme}`)
  })





class Editor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 'defaultValue',
            theme: 'monokai',
            mode: 'java',
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
          };
          this.setTheme = this.setTheme.bind(this);
          this.setMode = this.setMode.bind(this);
          this.onChange = this.onChange.bind(this);
          this.setFontSize = this.setFontSize.bind(this);
          this.setBoolean = this.setBoolean.bind(this);

    }

    onLoad() {
        console.log('i\'ve loaded');
      }
      onChange(newValue) {
        console.log('change', newValue);
        this.setState({
          value: newValue
        })
      }
    
      onSelectionChange(newValue, event) {
        console.log('select-change', newValue);
        console.log('select-change-event', event);
      }
    
      onCursorChange(newValue, event) {
        console.log('cursor-change', newValue);
        console.log('cursor-change-event', event);
      }
    
      onValidate(annotations) {
        console.log('onValidate', annotations);
      }

    setTheme(e) {
        this.setState({
          theme: e.target.value
        })
      }
      setMode(e) {
        this.setState({
          mode: e.target.value
        })
      }
      setBoolean(name, value) {
        this.setState({
          [name]: value
        })
      }
      setFontSize(e) {
        this.setState({
          fontSize: parseInt(e.target.value,10)
        })
      }

    handleChange = (event, index, value) => this.setState({mode:value});

    showSettingMenu(){

    }

    publish(topicBox, payloadBox) {
        alert(this.refs.input.value);
        alert(this.refs.classname.value);
      }

      crjava()
      {
          
  
          
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (xhttp.readyState == 4 && xhttp.status == 200) {
            //   document.getElementById("output").innerHTML = this.responseText;

            alert(xhttp.responseText);
              }
            };
            
  
            xhttp.open("POST", "https://api.adoringly18.hasura-app.io/crjava", true);
            
              xhttp.setRequestHeader("input", this.state.input);
  
              xhttp.setRequestHeader("classname",this.state.classname);
          
            xhttp.send(this.state.body);
          
      }
    

    render()
    {

        const style={
                float:'right',

        }

        return <div disply="inline-block">

        <div style={{float:'right', alignItems:"center"}}>
     

    
       <DropDownMenu value={this.state.mode} onChange={this.handleChange} style={style}>

       {
           languages.map((lang)=>(

            <MenuItem value= {lang} primaryText={lang} />

           ))
       }
        </DropDownMenu>

        </div>
        

        <AceEditor
        width="58vw"
    mode={this.state.mode}
    theme={this.state.theme}
    onChange={this.state.onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    enableBasicAutocompletion={this.state.enableBasicAutocompletion}
    enableLiveAutocompletion={this.state.enableLiveAutocompletion}
    height='60vh'
    showSettingsMenu={true}
    mode={this.state.mode}
  theme={this.state.theme}
  name="blah2"
  onLoad={this.onLoad}
  onChange={(value)=>{
      this.state.body=value;

//alert(this.state.body);

  }}
  fontSize={this.state.fontSize}
  showPrintMargin={this.state.showPrintMargin}
  showGutter={this.state.showGutter}
  highlightActiveLine={this.state.highlightActiveLine}
  value={this.state.value}
  setOptions={{
  enableBasicAutocompletion: this.state.enableBasicAutocompletion,
  enableLiveAutocompletion: this.state.enableLiveAutocompletion,
  enableSnippets: this.state.enableSnippets,
  showLineNumbers: this.state.showLineNumbers,
  tabSize: 2,}}
  />

<TextField
    value={this.state.classname}
    ref="classname"
      hintText="Mandatory field"
      floatingLabelText="Public Class Name"
      onChange={
          (event,value)=>{
                this.state.classname=value
          }
      }
    />

    <TextField
    ref="input"
    value={this.state.input}
      hintText="Mandatory field"
      floatingLabelText="Input for the program"
      onChange={(event,value)=>{
          this.state.input=value;}}
    />


<br/>
      

<FlatButton style={{fontSize:12}} height='100%'

onClick={()=>{
   
  this. crjava();


}
    
    }

> 
        RUN


        </FlatButton>


        <FlatButton secondary={true} style={{fontSize:12}}> 
        SETTING
        </FlatButton>


        <FlatButton primary={true} style={{fontSize:12}}> 
        SUBMIT
        </FlatButton>
  

        </div>;
    }

}

export default Editor;