import React, {Component} from 'react';
import { MessageBar, MessageBarType } from '@fluentui/react'

class ErrorMessageBar extends Component {
    render() {
        return (
            <MessageBar
                messageBarType={MessageBarType.error}
                isMultiline={false}
                dismissButtonAriaLabel="Close"
            >
                {this.props.message}
            </MessageBar>
        );
    }
}

export default ErrorMessageBar;
