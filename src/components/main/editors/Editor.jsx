import React, { Component } from 'react'
import { CosnoteTheme } from "../../../cosnoteTheme";
import TextEditor from './TextEditor';
import DeveloperEditor from './DeveloperEditor';



export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            developer: true,
        }
    }

    render() {
        return (
            <div className="cosnoteEditorWrapper">
                <div className="cosnoteEditor" style={{}}>
                    {this.state.developer ?
                        <DeveloperEditor />
                        : <TextEditor />
                    }
                </div>
            </div>
        )
    }
}
