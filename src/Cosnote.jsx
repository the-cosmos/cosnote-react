import { Fabric, initializeIcons } from '@fluentui/react';
import { ThemeProvider } from "@fluentui/react-theme-provider";
import React, {Component} from 'react';
import Header from "./components/header/header";
import Login from './components/landing/Login';
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
            errorMessage: String(),
        };
        this.request = this.request.bind(this);
    }

    // showErrorMessageBar(message) {
    //     this.setState(prevState => {
    //         prevState.errorMessage = message;
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

    startLoading(start=true) {
        this.setState(state => {
            return {...state, isLoading: start}
        })
    }

    authorizeWithSession() {
        this.startLoading();
        this.request("/user/", {method: "GET"}).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState(state => {return {...state, user: json}});
                })
            }
            this.startLoading(false);
        })
    }

    componentDidMount() {
        this.authorizeWithSession();
    };

    render() {
        return (
            <ThemeProvider theme={CosnoteTheme} className="workspace">
                <Fabric className="workspace">
                    <div className="workspace">
                        <Header cosnote={this} />
                        {this.state.user
                            ? <Main cosnote={this} />
                            : <Login cosnote={this} />
                        }
                        <Main cosnote={this} />
                    </div>
                </Fabric>
            </ThemeProvider>
        );
    }
}

export default Cosnote;
