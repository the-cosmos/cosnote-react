import { IconButton, Stack } from '@fluentui/react'
import React, { Component } from 'react'

const stackStyles = {
    root: {
        height: "100%"
    }
}

const itemStyles = {
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

export default class Sidebar extends Component {
    render() {
        return (
            <Stack verticalAlign="start" styles={stackStyles}>
                <Stack.Item styles={itemStyles}>
                    <IconButton styles={iconButtonStyles} iconProps={{iconName: "Add"}} title="New Note" ariaLabel="New Note" />
                </Stack.Item>
                <Stack.Item styles={itemStyles}>
                    <IconButton styles={iconButtonStyles} iconProps={{iconName: "QuickNote"}} title="All Notes" ariaLabel="All Notes" />
                </Stack.Item>
                <Stack.Item styles={itemStyles}>
                    <IconButton styles={iconButtonStyles} iconProps={{iconName: "Search"}} title="Search Note" ariaLabel="Search Note" />
                </Stack.Item>
            </Stack>
        )
    }
}
