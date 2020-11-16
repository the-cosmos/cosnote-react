import React, { Component } from 'react';
import { Stack } from '@fluentui/react';
import Editor from './editors/Editor';
import Sidebar from './Sidebar';

const stackStyles = {
    root: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
    }
}

const stackItemStyles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        overflow: 'hidden',
    }
}

const sidebarStyles = {
    root: {
        // maxWidth: 250,
    }
}

const editorStyles = {
    root: {
        ...stackItemStyles.root,
        width: "100%",
    }
}


export default class Application extends Component {

    constructor(props) {
        super(props);
        this.fetchNotes = this.fetchNotes.bind(this);
        this.setActiveNote = this.setActiveNote.bind(this);
    }

    sortNotes() {
        let notes = this.props.cosnote.state.notes;
        notes.sort((a, b) => a.metadata.last_updated > b.metadata.last_updated ? -1 : (b.metadata.last_updated > a.metadata.last_updated ? 1 : 0));
        this.props.cosnote.setState(state => {return {...state, notes: notes}});
    }

    getNewNote() {
        return {
            content: String(),
            title: String(),
            metadata: {
                language: "text",
                shared: false,
            }
        }
    }

    setActiveNote(note) {
        this.props.cosnote.setState(state => {return {...state, activeNote: note}});
    }

    fetchNotes() {
        if (this.props.cosnote.state.notes === null) {
            this.props.cosnote.startLoading();
            this.props.cosnote.request("/notes/", {method: "GET"}).then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.props.cosnote.setState(state => {return {...state, notes: json}});
                        this.sortNotes();
                    })
                }
            })
            this.props.cosnote.startLoading(false);
        } else {
            this.sortNotes();
        }
        if (this.props.cosnote.state.notes) {
            this.setActiveNote(this.props.cosnote.state.notes[0]);
        } else {
            let note = this.getNewNote();
            this.setActiveNote(note);
            this.props.cosnote.setState(state => {return {...state, notes: [note]}});
        }
    }

    componentDidMount() {
        this.fetchNotes();
    }

    render() {
        return (
            <Stack horizontal styles={stackStyles} tokens={{}}>
                <Stack.Item styles={sidebarStyles}>
                    <Sidebar cosnote={this.props.cosnote} />
                </Stack.Item>
                <Stack.Item grow styles={editorStyles}>
                    <Editor cosnote={this.props.cosnote} />
                </Stack.Item>
            </Stack>
        )
    }
}
