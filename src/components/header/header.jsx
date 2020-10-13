import { FontSizes, IconButton, Stack } from '@fluentui/react';
import React, {Component} from 'react';
import NavigationBar from './Navigation';

const navItemStyles = {
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
}

class Brand extends Component {
    render() {
        return (
            <div>
                <Stack tokens={{childrenGap: 5}}>
                    <Stack horizontal horizontalAlign="start">
                        <span style={navItemStyles}>
                            <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.size68}} } />
                        </span>
                        <span style={navItemStyles}>
                            <div className="brandingContainer">
                                {/* <h1 style={brandBaseStyle}>Cosnote</h1> */}
                            </div>
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
