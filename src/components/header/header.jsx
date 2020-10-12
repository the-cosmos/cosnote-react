import React, {Component} from 'react';
import ErrorMessageBar from "../utils/ErrorMessageBar";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Cosnote</h1>
            </div>
        );
    }
}

class HeaderWrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.cosnote.state.apiErrorMessage ? <ErrorMessageBar message={this.props.cosnote.state.apiErrorMessage} /> : <Header />}
            </div>
        );
    }
}

export default HeaderWrapper;
