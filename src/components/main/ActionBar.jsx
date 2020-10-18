import { DefaultEffects } from '@fluentui/react'
import React, { Component } from 'react'
import { CosnoteTheme } from "../../cosnoteTheme";

export default class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: this.props.toggled,
        }
    }

    render() {
        return (
            <>
                {this.state.toggled ?
                    <div className="sideActionBar" style={{boxShadow: DefaultEffects.elevation16, background: CosnoteTheme.palette.themePrimary}}>

                    </div> : <div></div>
                }
            </>
        )
    }
}
