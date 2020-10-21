import { Fabric, initializeIcons } from '@fluentui/react';
import { ThemeProvider } from "@fluentui/react-theme-provider";
import React, {Component} from 'react';
import Header from "./components/header/header";
// import Login from './components/landing/Login';
import Main from "./components/main/Main";
import { CosnoteTheme } from './cosnoteTheme';
import './Cosnote.css';


initializeIcons();


class Cosnote extends Component {

    API_BASE_URL = "http://127.0.0.1:5000/api";


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            apiErrorMessage: String(),
        };
        this.request = this.request.bind(this);
    }

    // showErrorMessageBar(message) {
    //     this.setState(prevState => {
    //         prevState.apiErrorMessage = message;
    //         return prevState
    //     })
    // }

    request(route, options) {
        options = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },
            ...options,
            body: JSON.stringify(options.json || {})
        };
        if (["GET", "HEAD"].includes(options.method.toUpperCase())) {
            delete options.body;
        };
        return fetch(this.API_BASE_URL + route, options);
    };

    authorizeWithSession() {

    }

    componentDidMount() {
    };

    render() {
        return (
            <ThemeProvider theme={CosnoteTheme} className="workspace">
                <Fabric className="workspace">
                    <div className="workspace">
                        <Header cosnote={this} />
                        {/* {this.state.user ? <Main cosnote={this} /> : <Login cosnote={this} />} */}
                        <Main cosnote={this} />
                    </div>
                </Fabric>
            </ThemeProvider>
        );
    }
}

export default Cosnote;
