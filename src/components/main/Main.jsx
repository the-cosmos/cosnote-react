import React, { Component } from 'react'
import Application from '../application/Application';

export default class Main extends Component {

    render() {
        return (
            <div className="cosnoteMain">
                <Application cosnote={this.props.cosnote} />
            </div>
        )
    }
}
