// import { Stack } from '@fluentui/react'
import { ImageFit, Image } from '@fluentui/react'
import React, { Component } from 'react'


// const stackStyles = {
//     root: {
//         // background: DefaultPalette.themeTertiary,
//         overflow: 'hidden',
//         width: "100%",
//       },
// }

// const stackItemStyles = {
//     root: {
//         alignItems: 'center',
//         // background: DefaultPalette.themePrimary,
//         // color: DefaultPalette.white,
//         display: 'flex',
//         height: 50,
//         justifyContent: 'center',
//         overflow: 'hidden',
//       },
// }

// const nonShrinkingStackItemStyles = {
//     root: {
//       alignItems: 'center',
//     //   background: DefaultPalette.themePrimary,
//     //   color: DefaultPalette.white,
//       display: 'flex',
//       height: 50,
//       justifyContent: 'center',
//       overflow: 'hidden',
//       width: 500,
//     },
// }

export default class Login extends Component {
    render() {
        return (
            <div className="workspace">
                {/* <Stack horizontal styles={stackStyles} tokens={{childrenGap: 5}}>
                    <Stack.Item grow styles={stackItemStyles}></Stack.Item>
                    <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles}></Stack.Item>
                </Stack> */}
                <Image src="/static/images/loginBackground.jpg" imageFit={ImageFit.cover} maximizeFrame/>
            </div>
        )
    }
}
