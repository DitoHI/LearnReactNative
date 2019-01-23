import {
    createStackNavigator,
} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedIn from '../screens/LoggedIn';
import TurnOnNotification from '../screens/TurnOnNotification';

const AppRouteConfig = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LoggedIn: { screen: LoggedIn },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword },
    TurnOnNotification: { screen: TurnOnNotification },
});

export default AppRouteConfig;