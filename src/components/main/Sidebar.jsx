import { IconButton, Separator, Stack } from '@fluentui/react'
import React, { Component } from 'react'
import SidePanel from './SidePanel'

const stackStyles = {
    root: {
        height: "100%",
        display: 'flex',
    }
}

const stackItemStyles = {
    root: {
        ...stackStyles.root,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    }
}

const actionItemStyles = {
    root: {
        display: 'flex',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const iconButtonStyles = {
    root: {
        width: "100%",
        height: "100%",
    }
}

const nonShrinkingStackItemStyles = {
    root: {
        ...stackItemStyles.root,
        width: 50
    }
}

const sidebardPaneStyles = {
    root: {
        ...stackStyles.root,
        // maxWidth: 200,
        width: 250,
    }
}

export default class Sidebar extends Component {
    render() {
        return (
            <Stack styles={stackStyles} tokens={{}} horizontal horizontalAlign="start">
                <Stack.Item styles={nonShrinkingStackItemStyles}>
                    <Stack verticalAlign="start" styles={stackStyles}>
                        <Stack.Item styles={actionItemStyles}>
                            <IconButton styles={iconButtonStyles} iconProps={{iconName: "Add"}} title="New Note" ariaLabel="New Note" />
                        </Stack.Item>
                        <Stack.Item styles={actionItemStyles}>
                            <IconButton styles={iconButtonStyles} iconProps={{iconName: "QuickNote"}} title="All Notes" ariaLabel="All Notes" />
                        </Stack.Item>
                        <Stack.Item styles={actionItemStyles}>
                            <IconButton styles={iconButtonStyles} iconProps={{iconName: "Search"}} title="Search Note" ariaLabel="Search Note" />
                        </Stack.Item>
                    </Stack>
                </Stack.Item>
                <Separator vertical styles={{root: {padding: 0}}} />
                <Stack.Item grow styles={sidebardPaneStyles}>
                    {/* <SidePanel /> */}
                </Stack.Item>
            </Stack>
        )
    }
}
