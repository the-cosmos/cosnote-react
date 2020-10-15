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
            this.cosnote.setState(state => {return {...state, partialUser: null}})
        })
    }

    render() {
        return (
            <div>
                {this.cosnote.state.partialUser ? <DefaultButton iconProps={{iconName: "SignOut"}} text={this.cosnote.state.partialUser.username} onClick={this.revoke} /> : <div></div>}
            </div>
        )
    }
}
