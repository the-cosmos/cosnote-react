import { IconButton, Separator, Stack } from '@fluentui/react'
import React, { Component } from 'react'
import ActionBar from './ActionBar'
import { CosnoteTheme } from "../../cosnoteTheme";

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
        width: 50,
        background: CosnoteTheme.palette.neutralLighterAlt,
    }
}

const sidebardPaneStyles = {
    root: {
        ...stackStyles.root,
        // maxWidth: 200,
        width: 350,
    }
}

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actionContext: {
                type: "inactive",
                active: false,
            },
        }
        this.handleContextAction = this.handleContextAction.bind(this);
    }

    actionContexts = [
        {
            type: "newNote",
            iconProps: {
                iconName: "Add",
            },
            title: "New Note",
            ariaLabel: "New Note",
            active: false,
        },
        {
            type: "allNotes",
            iconProps: {
                iconName: "QuickNote",
            },
            title: "All Notes",
            ariaLabel: "All Notes",
            active: false,
        },
        {
            type: "searchNote",
            iconProps: {
                iconName: "Search",
            },
            title: "Search Note",
            ariaLabel: "Search Note",
            active: false,
        },
    ]

    handleContextAction(context) {
        return _event => {
            console.log(context);
        }
    }

    render() {
        return (
            <Stack styles={stackStyles} tokens={{}} horizontal horizontalAlign="start">
                <Stack.Item styles={nonShrinkingStackItemStyles}>
                    <Stack verticalAlign="start" styles={stackStyles}>
                        {this.actionContexts.map((context, index) => (
                            <Stack.Item key={index} styles={actionItemStyles}>
                                <IconButton
                                    {...context}
                                    key={context.type}
                                    styles={iconButtonStyles}
                                    checked={this.state.actionContext.type === context.type}
                                    onClick={this.handleContextAction(context)}
                                />
                            </Stack.Item>
                        ))}
                    </Stack>
                </Stack.Item>
                <Separator vertical styles={{root: {padding: 0}}} />
                <Stack.Item grow styles={sidebardPaneStyles}>
                    {this.state.actionContext.active ? <ActionBar context={this.state.actionContext} /> : null}
                </Stack.Item>
            </Stack>
        )
    }
}
