import { IconButton, Separator, Stack } from '@fluentui/react'
import React, { Component } from 'react'
import ActionBar from './ActionBar';
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
        borderRadius: 0,
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

    actionContexts = [
        {
            type: "editNote",
            iconName: "EditNote",
            title: "Edit Note",
            ariaLabel: "Edit Note",
        },
        {
            type: "allNotes",
            iconName: "QuickNote",
            title: "All Notes",
            ariaLabel: "All Notes",
        },
        {
            type: "searchNote",
            iconName: "Search",
            title: "Search Note",
            ariaLabel: "Search Note",
        },
    ]

    defaultContext = {
        // type: "inactive",

        type: "allNotes",
        iconName: "QuickNote",
        title: "All Notes",
        ariaLabel: "All Notes",
    }

    constructor(props) {
        super(props);
        this.state = {
            actionContext: this.defaultContext,
        }
        this.handleContextAction = this.handleContextAction.bind(this);
    }

    handleContextAction(context) {
        return _event => {
            context = this.state.actionContext.type === context.type ? this.defaultContext : context
            this.setState(state => {return {...state, actionContext: context}})
        }
    }

    render() {
        return (
            <Stack styles={stackStyles} tokens={{}} horizontal horizontalAlign="start">
                <Stack.Item styles={nonShrinkingStackItemStyles}>
                    <Stack verticalAlign="start" styles={stackStyles}>
                        <Stack.Item styles={actionItemStyles}>
                            <IconButton iconProps={{iconName: "Add"}} styles={iconButtonStyles} title="New Note" ariaLabel="New Note" />
                        </Stack.Item>
                        <Separator horizontal styles={{root: {height: 0, padding: 0}}} />
                        {this.actionContexts.map((context, index) => (
                            <Stack.Item key={index} styles={actionItemStyles}>
                                {this.state.actionContext.type === context.type ? <div className="verticalPivot" style={{background: CosnoteTheme.palette.themePrimary}} /> : null}
                                <IconButton
                                    {...context}
                                    key={context.type}
                                    iconProps={{iconName: context.iconName}}
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
                    {this.state.actionContext.type !== "inactive" ? <ActionBar context={this.state.actionContext} /> : null}
                </Stack.Item>
            </Stack>
        )
    }
}
