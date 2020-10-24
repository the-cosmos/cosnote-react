import { DefaultEffects, Stack, TextField} from '@fluentui/react'
import React, { Component } from 'react'
import { CosnoteTheme } from "../../cosnoteTheme";

const sideActionBarStyles = {
    boxShadow: DefaultEffects.elevation16,
    background: CosnoteTheme.palette.neutralLighter,
}

const stackItemStyles = {
    root: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
}

const primaryItemStyles = {
    root: {
        ...stackItemStyles.root,
        width: "100%",
    }
}

class EditNote extends Component {
    render() {
        return (
            <Stack horizontalAlign="center" styles={{root: {height: "100%", padding: 20}}}>
                <Stack.Item disableShrink styles={primaryItemStyles}>
                    <TextField className="noteTitleField" placeholder="Title of this note or script." iconProps={{iconName: "ChevronRightMed"}} style={{backgroundColor: CosnoteTheme.palette.neutralLighter}} underlined />
                </Stack.Item>
            </Stack>
        )
    }
}

export default class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "editNote": <EditNote />,
        }
    }

    render() {
        return (
            <>
                <div className="sideActionBar" style={sideActionBarStyles}>
                    {this.state[this.props.context.type]}
                </div>
            </>
        )
    }
}
