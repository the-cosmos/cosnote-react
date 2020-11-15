import React, { Component } from 'react'
import TextEditor from './TextEditor';
import DeveloperEditor from './DeveloperEditor';

export default class Editor extends Component {

    render() {
        return (
            <div className="cosnoteEditorWrapper">
                {this.props.cosnote.state.user.preferences.developer ?
                    <DeveloperEditor cosnote={this.props.cosnote} />
                    : <TextEditor cosnote={this.props.cosnote} />
                }
            </div>
        )
    }
}
