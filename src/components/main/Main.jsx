import { Stack, Separator } from '@fluentui/react';
import React, { Component } from 'react'
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


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.cosnote = this.props.cosnote;
    }

    render() {
        return (
            <div className="cosnoteMain">
                <Stack horizontal styles={stackStyles} tokens={{}}>
                    <Stack.Item styles={sidebarStyles}>
                        <Sidebar />
                    </Stack.Item>
                    <Stack.Item grow styles={editorStyles}>
                        <Editor />
                    </Stack.Item>
                </Stack>
            </div>
        )
    }
}
