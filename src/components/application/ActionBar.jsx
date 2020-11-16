import { DefaultButton, DefaultEffects, Dropdown, PrimaryButton, SearchBox, Stack, TextField} from '@fluentui/react'
import languages from './editors/languages.json';
import React, { Component } from 'react'
import { CosnoteTheme } from "../../cosnoteTheme";
import NoteListView from './NoteListView';

const supportedLanguages = Object.keys(languages).map(lang => {
    return {key: lang, text: languages[lang]};
})

const sideActionBarStyles = {
    boxShadow: DefaultEffects.elevation16,
    background: CosnoteTheme.palette.neutralLighter,
}

const stackStyles = {
    root: {
        height: "100%",
        width: "100%",
        padding: 20,
    }
}

const stackItemStyles = {
    root: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
}

const primaryItemStyles = {
    root: {
        ...stackItemStyles.root,
        width: "100%",
    }
}

class EditNote extends Component {
    render() {
        return (
            <Stack verticalAlign="space-between" styles={stackStyles}>
                <Stack.Item styles={{}}>
                    <Stack horizontalAlign="center" styles={{}} tokens={{childrenGap: 20}}>
                        <Stack.Item disableShrink styles={primaryItemStyles}>
                            <TextField className="noteTitleField" placeholder="Title of this note or script." iconProps={{iconName: "Header"}} style={{backgroundColor: CosnoteTheme.palette.neutralLighter}} underlined />
                        </Stack.Item>
                        <Stack.Item disableShrink styles={primaryItemStyles}>
                            <Dropdown label="Language" className="noteLanguageDropdown" options={supportedLanguages} styles={{callout: {display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 300px)"}}} />
                        </Stack.Item>
                    </Stack>
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal horizontalAlign="center" styles={{root: {width: "100%"}}} tokens={{childrenGap: 20}}>
                        <Stack.Item styles={primaryItemStyles}>
                            <PrimaryButton styles={primaryItemStyles} text="Sync" iconProps={{iconName: "SyncStatus"}} />
                        </Stack.Item>
                        {/* <Stack.Item styles={stackItemStyles}>
                            <DefaultButton text="Share" iconProps={{iconName: "Share"}} />
                        </Stack.Item> */}
                        <Stack.Item styles={primaryItemStyles}>
                            <DefaultButton styles={primaryItemStyles} text="Trash" iconProps={{iconName: "Delete"}} />
                        </Stack.Item>
                        </Stack>
                </Stack.Item>
            </Stack>
        )
    }
}


class AllNotes extends Component {
    render() {
        return (
            <Stack verticalAlign="start" styles={stackStyles}>
                <Stack.Item>
                    <Stack horizontalAlign="center" styles={{}} tokens={{childrenGap: 20}}>
                        <SearchBox className="noteSearchBar" placeholder="Search through your notes ..." onSearch={() => {}} />
                    </Stack>
                </Stack.Item>
                <Stack.Item>
                    <Stack verticalAlign="start" style={stackStyles}>
                        {(this.props.cosnote.state.notes || []).map((note, index) => (
                            <Stack.Item>
                                <NoteListView key={index} note={note} />
                            </Stack.Item>
                        ))}
                    </Stack>
                </Stack.Item>
            </Stack>
        )
    }
}

export default class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "editNote": <EditNote cosnote={this.props.cosnote} app={this.props.app} />,
            "allNotes": <AllNotes cosnote={this.props.cosnote} app={this.props.app} />,
        }
    }

    render() {
        return (
            <>
                <div className="sideActionBar" style={sideActionBarStyles}>
                    {this.state[this.props.context.type]}
                </div>
            </>
        )
    }
}
