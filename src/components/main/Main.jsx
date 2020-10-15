import React, { Component } from 'react'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.cosnote = this.props.cosnote;
    }

    render() {
        return (
            <div>
                <h1>Hellow {this.cosnote.state.partialUser.username} from MAIN.jsx</h1>
            </div>
        )
    }
}
