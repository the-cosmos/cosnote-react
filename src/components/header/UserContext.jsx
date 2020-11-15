import { ActionButton } from '@fluentui/react'
import React, { Component } from 'react'

// const userPersonaStyles = {
//     root: {

//     }
// }

const iconStyles = {
    root: {
        height: 50,
        width: 50,
        padding: 4,
    }
}

export default class UserContext extends Component {

    constructor(props) {
        super(props);
        this.cosnote = this.props.cosnote;
        this.revoke = this.revoke.bind(this);
    }

    revoke() {
        this.props.cosnote.request("/revoke/", {}).then(response => {
            this.cosnote.setState(state => {return {...state, ...this.props.cosnote.baseState, isAuthorized: false}})
        })
    }

    render() {
        return (
            <>
                {/* <IconButton iconProps={{iconName: "Settings"}} styles={iconStyles} /> */}
                {this.cosnote.state.isAuthorized ?
                    <ActionButton
                        iconProps={{iconName: "SignOut"}}
                        text={this.cosnote.state.user.username}
                        onClick={this.revoke}
                    />
                : <div></div>}
            </>
        )
    }
}
