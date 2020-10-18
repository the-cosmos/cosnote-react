import { FontSizes, FontWeights, IconButton, Separator, Stack, DefaultEffects } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text";
import React, {Component} from 'react';
import { CosnoteTheme } from '../../cosnoteTheme';
import NavigationBar from './Navigation';
import UserContext from './UserContext';


const stackStyles = {
    root: {
        overflowX: "auto",
        overflowY: "hidden",
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

const navBrandIconStyles = {
    root: {
        ...navItemStyles.root,
        width: 50,
        height: 50,
    }
}

const brandIconStyles = {
    root: {
        fontSize: FontSizes.icon,
        height: "100%",
        width: "100%",
    }
}

const navBrandNameStyles = {
    root: {
        ...navItemStyles.root,
        paddingLeft: 25,
        height: "100%"
    }
}

const navUserContextStyles = {
    root: {
        marginRight: 25
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
                <Stack styles={stackStyles} tokens={{}} horizontal horizontalAlign="space-between">
                    <Stack horizontal horizontalAlign="start">
                        <Stack.Item styles={navBrandIconStyles}>
                            <IconButton iconProps={{iconName: "waffle"}} styles={brandIconStyles} />
                        </Stack.Item>
                        <Separator styles={{root: {marginBottom: -7, marginTop: -7, padding: 0}}} vertical />
                        <Stack.Item styles={navBrandNameStyles}>
                            <Text variant={"large"} block style={{fontWeight: FontWeights.regular}}>Cosnote</Text>
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
            <div className="cosnoteHeader" style={{background: CosnoteTheme.palette.white, boxShadow: DefaultEffects.elevation16}}>
                <header>
                    <Brand cosnote={this.props.cosnote} />
                    <NavigationBar />
                </header>
                <Separator horizontal styles={{root: {height: 0, padding: 0}}} />
            </div>
        );
    }
}

export default Header;
