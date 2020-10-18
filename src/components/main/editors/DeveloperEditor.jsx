import React, { Component } from 'react'
import Editor, { monaco } from "@monaco-editor/react";
import solarizedDarkTheme from "./themes/solarizedDarkTheme.json";
import CosnoteShimmer from "../../utils/Shimmer";

monaco.config({
    paths: {vs: "/static/js/monaco-editor/min/vs"},
})

monaco.init().then(monaco => {
    monaco.editor.defineTheme("solarized-dark", solarizedDarkTheme);
})

const editorOptions = {
    minimap: {
        enabled: false,
    }
}

const shimmerStyle = {
    marginLeft: 30,
    marginTop: -10,
}

export default class DeveloperEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "python",
            theme: "solarized-dark",
            content: String(),
        }
        this.editor = React.createRef();
        this.editorDidMount = this.editorDidMount.bind(this);
        this.onEditorStateUpdate = this.onEditorStateUpdate.bind(this);
    }

    editorDidMount(_, editor) {
        this.editor.current = editor;
    }

    onEditorStateUpdate() {
        this.editor.current.onDidChangeModelContent(event => {
            // this.editor.current.getValue();
        })
    }

    render() {
        return (
            <div className="cosnoteEditor" style={{background: "#002b36"}}>
                <Editor
                    height="100%"
                    width="100%"
                    value={this.state.content}
                    loading={<CosnoteShimmer style={shimmerStyle} count={4} background="#002b36" />}
                    language={this.state.language}
                    editorDidMount={this.editorDidMount}
                    theme={this.state.theme}
                    options={editorOptions}
                />
            </div>
        )
    }
}
