import { Panel, PanelType } from '@fluentui/react'
import React, { Component } from 'react'

export default class SidePanel extends Component {
    render() {
        return (
            <Panel
                isOpen={true}
                onDismiss={Object}
                type={PanelType.smallFixedNear}
                customWidth={250}
                closeButtonAriaLabel="Close"
                headerText={this.props.header}
                isBlocking={false}
            >
                {this.props.children}
            </Panel>
        )
    }
}
