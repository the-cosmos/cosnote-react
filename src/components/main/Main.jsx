import { Stack, Separator } from '@fluentui/react';
import React, { Component } from 'react'
import Sidebar from './Sidebar';

const stackItemStyles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        overflow: 'hidden',
    }
}

const nonShrinkingStackItemStyles = {
    root: {
        ...stackItemStyles.root,
        width: 48
    }
}

const stackStyles = {
    root: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
    }
}

const separatorStyles = {
    root: {
        padding: 0,
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
                    <Stack.Item styles={nonShrinkingStackItemStyles}>
                        <Sidebar />
                    </Stack.Item>
                    <Separator vertical styles={separatorStyles} />
                    <Stack.Item grow styles={stackItemStyles}>
                        <div></div>
                    </Stack.Item>
                </Stack>
            </div>
        )
    }
}
