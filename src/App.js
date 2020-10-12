import React, {Component} from 'react';
import { Fabric, loadTheme } from '@fluentui/react';
import cosnoteTheme from "./cosnoteTheme";


class Cosnote extends Component {

    API_BASE_URL = "https://cosnote.thecosmos.space/api";


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoading: false,
        };
        loadTheme(cosnoteTheme);
        this.request = this.request.bind(this);
    }

    request(route, method="POST", json={}) {
        return fetch(this.API_BASE_URL + route, {
            method: method, mode: "cors", credentials: "include", redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(json)
        });
    }

    render() {
        return (
            <Fabric>
                <div>

                </div>
            </Fabric>
        );
    }
}

export default Cosnote;
