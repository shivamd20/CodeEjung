
import React from 'react';
import AceEditor from 'react-ace';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';


import Dialog from 'material-ui/Dialog'

import 'brace/ext/language_tools';
import 'brace/ext/searchbox';


var input, filename;

const glotToken = `20228535-0f92-47d1-99c6-ce8ff8a090eb`;

var glotlanguages = [
    "assembly", //
    // "ats",
    // "bash",
    "c", //
    "clojure",//
    "cobol",//
    "coffeescript",//
    "cpp", //
    "crystal",
    "csharp",//
    "d",//
    "elixir", //
    "elm",//
    "erlang",//
    "fsharp",
    "go", //
    "groovy",//
    "haskell",//
    "idris",
    "java",//
    "javascript",//
    "julia", //
    "kotlin", //
    "lua", //
    "mercury",
    "nim",
    "ocaml",//
    "perl", //
    "perl6", //
    "php",//
    "python",  //
    "ruby",//
    "rust",//
    "scala",//
    "swift",//
    "typescript" //
];

const languages = [
    'javascript',
    'java',
    'python',
    // 'xml',
    'ruby',
    //  'sass',
    //  'markdown',
    //  'mysql',
    // 'json',
    //  'html',
    //  'handlebars',
    'golang',
    'csharp',
    'elixir',
    'typescript',
    // 'css',
    'c_cpp',
    'assembly_x86',
    'clojure',
    'cobol',
    'coffee',
    'd',
    'elm',
    'erlang',
    'groovy',
    'haskell',
    'julia',
    'kotlin',
    'lua',
    'ocaml',
    'perl',
    'php',
    'rust',
    'scala',
    'swift',
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







class Editor extends React.Component {

    changeEditorLanguage(language) {

        switch (language) {


            case "assembly":
                this.setState({
                    mode: "assembly_x86"
                });

                break; //
            // "ats": break;
            // "bash": break;
            case "c":
                this.setState({
                    mode: "c_cpp"
                });
                break; //
            case "clojure":
                this.setState({
                    mode: "clojure"
                });
                break;//
            case "cobol":
                this.setState({
                    mode: "cobol"
                });

                break;//
            case "coffeescript":
                this.setState({
                    mode: "coffee"
                });
                break;//
            case "cpp":
                this.setState({
                    mode: "c_cpp"
                });
                break; //
            //  case "crystal":
            //  this.setState({
            //   mode:"c_cpp"
            // });
            //  break;
            case "csharp":
                this.setState({
                    mode: "csharp"
                });
                break;//
            case "d":
                this.setState({
                    mode: "d"
                });
                break;//
            case "elixir":
                this.setState({
                    mode: "elixir"
                });
                break; //
            case "elm":
                this.setState({
                    mode: "elm"
                });
                break;//
            case "erlang":
                this.setState({
                    mode: "erlang"
                });
                break;//
            //  case "fsharp":
            //  this.setState({
            //   mode:"c_cpp"
            // });
            //  break;
            case "go":
                this.setState({
                    mode: "golang"
                });
                break; //
            case "groovy":
                this.setState({
                    mode: "groovy"
                });
                break;//
            case "haskell":
                this.setState({
                    mode: "haskell"
                });
                break;//
            // case "idris": break;
            case "java":
                this.setState({
                    mode: "java"
                });
                break;//
            case "javascript":
                this.setState({
                    mode: "javascript"
                });
                break;//
            case "julia":
                this.setState({
                    mode: "julia"
                });
                break; //
            case "kotlin":
                this.setState({
                    mode: "kotlin"
                });
                break; //
            case "lua":
                this.setState({
                    mode: "lua"
                });
                break; //
            // case "mercury": break;


            // case "nim": break;
            case "ocaml":
                this.setState({
                    mode: "ocaml"
                });
                break;//
            case "perl":
                this.setState({
                    mode: "perl"
                });
                break; //
            case "perl6":
                this.setState({
                    mode: "perl"
                });
                break; //
            case "php":
                this.setState({
                    mode: "php"
                });
                break;//
            case "python":
                this.setState({
                    mode: "python"
                });
                break;  //
            case "ruby":
                this.setState({
                    mode: "ruby"
                });
                break;//
            case "rust":
                this.setState({
                    mode: "rust"
                });
                break;//
            case "scala":
                this.setState({
                    mode: "scala"
                });
                break;//
            case "swift":
                this.setState({
                    mode: "swift"
                });
                break;//
            case "typescript":
                this.setState({
                    mode: "typescript"
                });
                break; //




        }

    }

    constructor(props) {
        super(props);

        this.state = {
            code: `

      public class Ramu{

        public static void main(String ...args)
        {

          System.out.println("Hello from Ramu");

        }

      }`,
            theme: 'monokai',
            mode: 'java',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
            language: 'java',
            version: 'latest',
            filename: 'Ramu.java',
            input: 'abcd',
            dopen: false,
            loading: "hidden"
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
            fontSize: parseInt(e.target.value, 10)
        })
    }

    handleChange = (event, index, value) => this.setState({ mode: value });

    showSettingMenu() {

    }

    publish(topicBox, payloadBox) {
        alert(this.refs.input.value);
        alert(this.refs.filename.value);
    }

    crjava() {



        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            console.log(xhttp.responseText);
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //   document.getElementById("output").innerHTML = this.responseText;

                let obj = JSON.parse(xhttp.responseText);



                this.setState({
                    dopen: true,
                    output: obj.stdout,
                    stderror: obj.stderr,
                    error: obj.error,
                    loading: "hidden"
                });

                //  alert(JSON.stringify(xhttp.responseText));
            }
        };
        const URL = `https://run.glot.io/languages/${this.state.language}/latest`;

        xhttp.open("POST", URL, true);

        xhttp.setRequestHeader("Authorization", `Token ${glotToken}`);

        xhttp.setRequestHeader("Content-type", 'application/json');



        xhttp.send(JSON.stringify({
            "files": [{
                "name": this.state.filename,
                "content": this.state.code
            }],
            'stdin': this.state.input
        }));

    }


    render() {

        const style = {
            float: 'right',

        }

        const dActions = [


            <FlatButton
                label="Okay"
                primary={true}
                //   keyboardFocused={true}
                onClick={() => this.setState({
                    dopen: false
                })}
            />,

        ];

        return (
            <div disply="inline-block">


                <Dialog
                    title="Output"
                    actions={dActions}
                    modal={false}
                    open={this.state.dopen}
                    lock={true}
                    onRequestClose={() => {

                        this.setState(() => {
                            return {
                                dopen: false

                            }
                        });

                    }}
                >


                    <b>output: </b>   {this.state.output}

                    <br />
                    <b style={
                        {
                            color: 'red'
                        }
                    }>error: </b> {this.state.error}
                    <br />
                    <b style={
                        {
                            color: 'red'
                        }
                    }>stderror: </b>  {this.state.stderror}






                </Dialog>

                <div style={{ float: 'right', alignItems: "center" }}>



                    <DropDownMenu value={this.state.theme} onChange={(event, index, value) => {

                        this.setState(
                            () => {

                                return {
                                    theme: value
                                }
                            }
                        );

                    }} style={style}>

                        {
                            themes.map((theme) => (

                                <MenuItem value={theme} primaryText={theme} />

                            ))
                        }
                    </DropDownMenu>

                    <DropDownMenu value={this.state.language}


                        onChange={(event, index, value) => {

                            this.setState(

                                () => {

                                    return {

                                        language: value

                                    }
                                });
                            //   this.state.language=value;

                            this.changeEditorLanguage(value);

                        }}
                        style={style}>

                        {
                            glotlanguages.map((lang) => (

                                <MenuItem value={lang} primaryText={lang} />

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
                    editorProps={{ $blockScrolling: true }}
                    enableBasicAutocompletion={this.state.enableBasicAutocompletion}
                    enableLiveAutocompletion={this.state.enableLiveAutocompletion}
                    height='60vh'
                    showSettingsMenu={true}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    name="blah2"
                    onLoad={this.onLoad}
                    onChange={(value) => {
                        this.state.code = value;

                        console.log("value changed");

                        //alert(this.state.body);

                    }}
                    fontSize={this.state.fontSize}
                    showPrintMargin={this.state.showPrintMargin}
                    showGutter={this.state.showGutter}
                    highlightActiveLine={this.state.highlightActiveLine}
                    value={this.state.code}
                    setOptions={{
                        enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                        enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                        enableSnippets: this.state.enableSnippets,
                        showLineNumbers: this.state.showLineNumbers,
                        tabSize: 2,
                    }}
                />


                <LinearProgress mode="indeterminate" style={{ visibility: this.state.loading }}  >Loading</LinearProgress>

                <TextField
                    defaultValue={this.state.filename}
                    ref="filename"
                    hintText="Mandatory field"
                    floatingLabelText="File Name"
                    onChange={
                        (event, value) => {
                            this.state.filename = value
                        }
                    }
                />

                <TextField
                    ref="input"
                    defaultValue={this.state.input}
                    hintText="Mandatory field"
                    floatingLabelText="Input for the program"
                    onChange={(event, value) => {
                        this.state.input = value;
                    }}
                />


                <br />


                <FlatButton style={{ fontSize: 12 }} height='100%'

                    onClick={() => {

                        this.crjava();

                        this.setState({

                            loading: "visible"
                        });


                    }

                    }
                    disabled={this.state.loading === "hidden" ? false : true}

                >
                    RUN


        </FlatButton>



                <FlatButton secondary={true} style={{ fontSize: 12 }}>
                    SETTING
        </FlatButton>


                <FlatButton primary={true} style={{ fontSize: 12 }}>
                    SUBMIT
        </FlatButton>


            </div>)
    }

}

export default Editor;
