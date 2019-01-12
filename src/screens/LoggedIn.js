import React, { Component } from 'react';
import transparentHeaderStyle  from '../styles/navigation';
import LoggedInTabNavigatior from '../navigators/LoggedInTabNavigator';

export default class LoggedIn extends Component {
    static navigationOptions = () => ({
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        getsturesEnabled: false,
    });
    render() {
        return(
            <LoggedInTabNavigatior/>
        );
    }
}