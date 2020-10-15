import { FontSizes, IconButton, Separator, Stack } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text";
import React, {Component} from 'react';
import { CosnoteTheme } from '../../cosnoteTheme';
import NavigationBar from './Navigation';


const stackStyles = {
    root: {
        overflow: "hidden",
        paddingBottom: 0,
    }
}

const navItemStyles = {
    alignItems: 'center',
    display: 'flex',
    background: CosnoteTheme.palette.white,
    height: FontSizes.size42,
    justifyContent: 'center',
    width: "auto",
}

const separatorStyles = {
    root: {
        height: 0,
        padding: 0,
    }
}

class Brand extends Component {
    render() {
        return (
            <div>
                <Stack styles={stackStyles} tokens={{childrenGap: 5, padding: 7}} horizontal horizontalAlign="start">
                    <span style={navItemStyles}>
                        <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.icon}} } />
                    </span>
                    <Separator vertical />
                    <span style={{...navItemStyles, paddingLeft: 7}}>
                        <Text variant={"large"} block>Cosnote</Text>
                    </span>
                </Stack>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div className="cosnoteHeader" style={{background: CosnoteTheme.palette.white}}>
                <header>
                    <Brand />
                    <NavigationBar />
                </header>
                <Separator horizontal styles={separatorStyles} />
            </div>
        );
    }
}

export default Header;
