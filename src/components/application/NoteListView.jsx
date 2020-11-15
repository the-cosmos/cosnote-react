import React, { Component } from 'react'

export default class NoteListView extends Component {
    render() {
        note = this.props.note;
        return (
            <div>
                <h3>{note.title}</h3>
                <p>{note.content.slice(0, 20)}</p>
            </div>
        )
    }
}
