import { Stack } from '@fluentui/react'
// import { ImageFit, Image } from '@fluentui/react'
import React, { Component } from 'react'
import Authorization from './Authorization'


const stackStyles = {
    root: {
        // background: DefaultPalette.themeTertiary,
        overflow: 'hidden',
        width: "100%",
        height: "100%"
      },
}

const stackItemStyles = {
    root: {
        alignItems: 'center',
        // background: DefaultPalette.themePrimary,
        // color: DefaultPalette.white,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      },
}

const nonShrinkingStackItemStyles = {
    root: {
      alignItems: 'center',
    //   background: DefaultPalette.themePrimary,
    //   color: DefaultPalette.white,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    },
}

export default class Login extends Component {
    render() {
        return (
            <div className="workspace loginCover">
                {/* <Image src="/static/images/loginBackground.jpg" imageFit={ImageFit.cover} maximizeFrame /> */}
                <Stack horizontal styles={stackStyles} tokens={{}}>
                    <Stack.Item grow styles={stackItemStyles}></Stack.Item>
                    <Stack.Item grow styles={nonShrinkingStackItemStyles}>
                        <Authorization cosnote={this.props.cosnote} />
                    </Stack.Item>
                </Stack>
            </div>
        )
    }
}
