import { Checkbox, DefaultEffects, FontWeights, Stack, Text, TextField } from "@fluentui/react";
import React, { Component } from "react";
import { CosnoteTheme } from '../../cosnoteTheme';

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

export default class LoginCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: String(),
            password: String(),
            remember: true,
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
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

    render() {
        return (
            <div className="loginCard" style={{boxShadow: DefaultEffects.elevation64, backgroundColor: CosnoteTheme.palette.white}}>
                <Text variant={"large"} style={{fontWeight: FontWeights.semibold}}>Start with a new or your existing credentials.</Text>
                <Stack verticalAlign styles={stackStyles} tokens={{childrenGap: 5}}>
                    <Stack.Item styles={stackItemStyles}>
                    </Stack.Item>
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
            </div>
        )
    }
}
