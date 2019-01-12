import {
    createStackNavigator,
} from 'react-navigation';
import React from 'react';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedIn from '../screens/LoggedIn';

const AppRouteConfig = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LoggedIn: { screen: LoggedIn },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword }
});

export default AppRouteConfig;