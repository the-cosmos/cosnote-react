import { Checkbox, DefaultButton, DefaultEffects, FontWeights, MessageBar, MessageBarType, PrimaryButton, ProgressIndicator, Separator, Stack, Text, TextField } from "@fluentui/react";
import React, { Component } from "react";
import { CosnoteTheme } from '../../cosnoteTheme';
import getErrorMessage from "../../utils";

const stackStyles = {
    root: {
        overflow: "hidden",
        height: "auto",
    }
}

const stackItemStyles = {
    root: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: CosnoteTheme.palette.black,
    }
}

const separatorStyles = {
    root: {
        marginBottom: 20,
    }
}

export default class Authorization extends Component {

    constructor(props) {
        super(props);
        this.cosnote = this.props.cosnote;
        this.state = {
            username: String(),
            password: String(),
            remember: true,
            isLoading: false,
            errorMessage: String(),
        }
        this.onChange = this.onChange.bind(this);
        this.authorize = this.authorize.bind(this);
        this.authorizeThroughDiscord = this.authorizeThroughDiscord.bind(this);
    }

    onChange(e) {
        this.showErrorMessage(String())
        e.persist();
        this.setState(prevState => {
            if (e.target) {
                if (e.target.name.toLowerCase() === "remember") {
                    prevState.remember = e.target.checked;
                } else {
                    prevState[e.target.name] = e.target.value;
                }
            }
            return prevState;
        })
    }

    showErrorMessage(message) {
        this.setState(state => {
            return {...state, errorMessage: message, isLoading: false}
        })
    }

    startLoading(start=true) {
        this.setState(state => {
            return {...state, isLoading: start}
        })
    }

    authorize() {
        if (!this.state.username) {
            this.showErrorMessage("Please enter a valid username.")
            return
        };
        if (!this.state.password) {
            this.showErrorMessage("Please enter a valid password.")
            return
        };
        this.startLoading();
        let credentials = {
            username: this.state.username,
            password: this.state.password,
        }
        this.cosnote.request("/authorize/", {json: credentials}).then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    if (response.status === 404) {
                        this.cosnote.request("/register/", {json: credentials}).then(response => {
                            response.json().then(json => {
                                if (!response.ok) {
                                    return this.showErrorMessage(getErrorMessage(json.errors));
                                };
                                this.startLoading(false);
                                console.log(json);
                                this.cosnote.setState(state => {return {...state, partialUser: json}});
                                return;
                            })
                        })
                    } else {
                        return this.showErrorMessage(getErrorMessage(json.errors));
                    }
                } else {
                    this.startLoading(false);
                    console.log(json);
                    this.cosnote.setState(state => {return {...state, partialUser: json}});
                    return;
                }
            })
        })
    }

    authorizeThroughDiscord() {
    }

    authorizeThroughGoogle() {
    }

    render() {
        return (
            <div>
                <div className="loginCardWrapper">
                    <div className="loginMetaBar">
                        {this.state.errorMessage ? <MessageBar className="loginErrorMessage" messageBarType={MessageBarType.error}>{this.state.errorMessage}</MessageBar> : <div className="loginErrorMessage"></div>}
                        <ProgressIndicator className="cosnoteProgress" progressHidden={!this.state.isLoading} />
                    </div>
                    <div className="loginCard" style={{boxShadow: DefaultEffects.elevation64, backgroundColor: CosnoteTheme.palette.white}}>
                        <Stack verticalAlign styles={stackStyles} tokens={{childrenGap: 20}}>
                            <Stack.Item styles={stackItemStyles}>
                                <Text variant={"large"} style={{fontWeight: FontWeights.semibold}}>Start with new or your existing credentials.</Text>
                            </Stack.Item>
                            <Stack.Item styles={stackItemStyles}>
                                <div></div>
                            </Stack.Item>
                        </Stack>
                        <Stack className="loginFieldsWrapper" verticalAlign styles={stackStyles} tokens={{childrenGap: 5}}>
                            <Stack verticalAlign styles={stackStyles} tokens={{childrenGap: 15}}>
                                <Stack.Item styles={stackItemStyles}>
                                    <TextField name="username" className="loginField" iconProps={{iconName: "contact"}} placeholder="New or your existing username" required onChange={this.onChange} />
                                </Stack.Item>
                                <Stack.Item styles={stackItemStyles}>
                                    <TextField name="password" className="loginField" placeholder="Your password" required type="password" canRevealPassword onChange={this.onChange} />
                                </Stack.Item>
                                <Stack.Item styles={stackItemStyles}>
                                    <Checkbox name="remember" className="loginField" label="Remember Me" defaultChecked={this.state.remember} onChange={this.onChange} />
                                </Stack.Item>
                            </Stack>
                            <Stack verticalAlign styles={stackStyles} tokens={{childrenGap: 15, padding: 20}}>
                                <Stack.Item styles={stackItemStyles}>
                                    <PrimaryButton text="Login" onClick={this.authorize} style={{width: "30%"}} />
                                </Stack.Item>
                            </Stack>
                            <Separator styles={separatorStyles}>OR</Separator>
                            <Stack verticalAlign styles={stackStyles} tokens={{childrenGap: 15}}>
                                <Stack.Item styles={stackItemStyles}>
                                    <DefaultButton className="oauthButton" text="Login with Discord" onClick={this.authorizeThroughDiscord} disabled />
                                </Stack.Item>
                                <Stack.Item styles={stackItemStyles}>
                                    {/* <DefaultButton className="oauthButton" text="Login with Google" onClick={this.authorizeThroughGoogle} disabled /> */}
                                </Stack.Item>
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}
