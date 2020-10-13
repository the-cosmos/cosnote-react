import { FontSizes, IconButton, Stack } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text";
import React, {Component} from 'react';
import { CosnoteTheme } from '../../cosnoteTheme';
import NavigationBar from './Navigation';


const navItemStyles = {
    alignItems: 'center',
    display: 'flex',
    background: CosnoteTheme.palette.white,
    height: FontSizes.size42,
    justifyContent: 'center',
    width: "auto",
    margin: 7
}

class Brand extends Component {
    render() {
        return (
            <div>
                <Stack tokens={{childrenGap: 5}}>
                    <Stack horizontal horizontalAlign="start">
                        <span style={navItemStyles}>
                            <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.icon}} } />
                        </span>
                        <span style={navItemStyles}>
                            <Text variant={"large"} block>Cosnote</Text>
                        </span>
                    </Stack>
                </Stack>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <Brand />
                <NavigationBar />
            </header>
        );
    }
}

export default Header;
