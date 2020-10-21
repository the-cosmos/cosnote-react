import { DefaultEffects } from '@fluentui/react'
import React, { Component } from 'react'
import { CosnoteTheme } from "../../cosnoteTheme";

const sideActionBarStyles = {
    boxShadow: DefaultEffects.elevation16,
    background: CosnoteTheme.palette.neutralLighter,
}

export default class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className="sideActionBar" style={sideActionBarStyles}>

                </div>
            </>
        )
    }
}
