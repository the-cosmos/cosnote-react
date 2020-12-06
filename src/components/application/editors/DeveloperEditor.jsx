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
            theme: "solarized-dark",
            note: this.props.app.state.currentNote,
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
            <div className="cosnoteEditor">
                <Editor
                    className="developerEditor"
                    width="100%"
                    value={this.state.note.content}
                    loading={<CosnoteShimmer style={shimmerStyle} count={4} background="#002b36" />}
                    language={this.state.note.metadata.language}
                    editorDidMount={this.editorDidMount}
                    theme={this.state.theme}
                    options={editorOptions}
                />
            </div>
        )
    }
}
