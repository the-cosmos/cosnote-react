import { FontSizes, IconButton, Separator, Stack } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text";
import React, {Component} from 'react';
import { CosnoteTheme } from '../../cosnoteTheme';
import NavigationBar from './Navigation';
import UserContext from './UserContext';


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
        width: "auto"
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

const navUserContextStyles = {
    root: {
        marginRight: 25
    }
}

const separatorStyles = {
    root: {
        height: 0,
        padding: 0,
    }
}

const userContextStyles = {
    root: {
        ...navItemStyles.root,
    }
}

class Brand extends Component {
    render() {
        return (
            <div>
                <Stack styles={stackStyles} tokens={{padding: 4}} horizontal horizontalAlign="space-between">
                    <Stack horizontal horizontalAlign="start">
                        <Stack.Item styles={navIconStyles}>
                            <IconButton iconProps={{iconName: "waffle", style: {fontSize: FontSizes.icon}} } />
                        </Stack.Item>
                        <Separator styles={{root: {marginBottom: -7, marginTop: -7}}} vertical />
                        <Stack.Item styles={navBrandNameStyles}>
                            <Text variant={"large"} block>Cosnote</Text>
                        </Stack.Item>
                    </Stack>
                    <Stack styles={navUserContextStyles} horizontal horizontalAlign="end">
                        <Stack.Item styles={userContextStyles}>
                            <UserContext cosnote={this.props.cosnote} />
                        </Stack.Item>
                    </Stack>
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
                    <Brand cosnote={this.props.cosnote} />
                    <NavigationBar />
                </header>
                <Separator horizontal styles={separatorStyles} />
            </div>
        );
    }
}

export default Header;
