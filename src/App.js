import React, {Component} from 'react';
import { Fabric, loadTheme} from '@fluentui/react';
import cosnoteTheme from "./cosnoteTheme";
import Header from "./components/header/header";


class Cosnote extends Component {

    API_BASE_URL = "http://127.0.0.1:5000/api";


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoading: false,
            apiErrorMessage: String(),
        };
        loadTheme(cosnoteTheme);
        this.request = this.request.bind(this);
    }

    showErrorMessageBar(message) {
        this.setState(prevState => {
            prevState.apiErrorMessage = message;
            return prevState
        })
    }

    request(route, options) {
        fetch(this.API_BASE_URL + route, {
            method: options.method || "POST", mode: "cors", credentials: "include", redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(options.json || {})
        })
            .then(response => {
                response.json().then(json => {
                    if (response.status !== 200) {
                        if (json.errors) {
                            this.showErrorMessageBar(json.errors[Object.keys(json.errors)[0]]);
                        }
                    }
                })
                return response;
            }).catch(_error => {

        })
    }

    componentDidMount() {
        let json = this.request('/authorize/', {json: {username: "thecosmos", password: "xyz"}});
        console.log(json);
    }

    render() {
        return (
            <Fabric>
                <Header cosnote={this} />
            </Fabric>
        );
    }
}

export default Cosnote;
