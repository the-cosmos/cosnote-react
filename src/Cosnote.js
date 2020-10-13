import { Fabric, initializeIcons } from '@fluentui/react';
import { ThemeProvider } from "@fluentui/react-theme-provider";
import React, {Component} from 'react';
import Header from "./components/header/header";
import { CosnoteTheme } from './cosnoteTheme';


initializeIcons();


class Cosnote extends Component {

    API_BASE_URL = "http://127.0.0.1:5000/api";


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
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

    request(route, options = {
        method: "POST", json: {}
    }, callback) {
        fetch(this.API_BASE_URL + route, {
            method: options.method || "POST", mode: "cors", credentials: "include", redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(options.json || {})
        })
            .then(response => {
                response.json().then(json => {
                    // if (response.status !== 200 && (options.showErrorMessage || true)) {
                    //     if (json.errors) {
                    //         this.showErrorMessageBar(json.errors[Object.keys(json.errors)[0]]);
                    //     }
                    // }
                    callback(response);
                });
            }).catch(_error => {})
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ThemeProvider theme={CosnoteTheme}>
                <Fabric>
                    <Header cosnote={this} />
                </Fabric>
            </ThemeProvider>
        );
    }
}

export default Cosnote;
