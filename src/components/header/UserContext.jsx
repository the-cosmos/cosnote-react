import { DefaultButton } from '@fluentui/react'
import React, { Component } from 'react'

// const userPersonaStyles = {
//     root: {

//     }
// }

export default class UserContext extends Component {

    constructor(props) {
        super(props);
        this.cosnote = this.props.cosnote;
        this.revoke = this.revoke.bind(this);
    }

    revoke() {
        this.props.cosnote.request("/revoke/", {}).then(response => {
            this.cosnote.setState(state => {return {...state, user: null}})
        })
    }

    render() {
        return (
            <div>
                {this.cosnote.state.user ? <DefaultButton iconProps={{iconName: "SignOut"}} text={this.cosnote.state.user.username} onClick={this.revoke} /> : <div></div>}
            </div>
        )
    }
}
