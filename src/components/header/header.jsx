import { FontSizes, IconButton, Separator, Stack } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text";
import React, {Component} from 'react';
import { CosnoteTheme } from '../../cosnoteTheme';
import NavigationBar from './Navigation';


const stackStyles = {
    root: {
        overflow: "hidden",
    }
}

const navItemStyles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        background: CosnoteTheme.palette.white,
        height: FontSizes.size42,
        justifyContent: 'center',
        width: "auto",
        paddingTop: 2,
        paddingBottom: 2,
    }
}

const navIconStyles = {
    root: {
        ...navItemStyles.root,
        width: 42,
        height: 42,
    }
}

const navBrandNameStyles = {
    root: {
        ...navItemStyles.root,
        paddingLeft: 15,
    }
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
                <Stack styles={stackStyles} tokens={{padding: 4}} horizontal horizontalAlign="start">
                    <Stack.Item styles={navIconStyles}>
                        <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.icon}} } />
                    </Stack.Item>
                    <Separator styles={{root: {marginBottom: -7, marginTop: -7}}} vertical />
                    <Stack.Item styles={navBrandNameStyles}>
                        <Text variant={"large"} block>Cosnote</Text>
                    </Stack.Item>
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
