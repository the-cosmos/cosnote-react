import { FontSizes, IconButton, Separator, Stack } from '@fluentui/react';
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
}

class Brand extends Component {
    render() {
        return (
            <div>
                <Stack tokens={{childrenGap: 5, padding: 7}}>
                    <Stack horizontal horizontalAlign="start">
                        <span style={navItemStyles}>
                            <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.icon}} } />
                            <Stack.Item>
                                <Separator vertical />
                            </Stack.Item>
                        </span>
                        <span style={{...navItemStyles, paddingLeft: 7}}>
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
