import CreateReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import AppRouteConfig from '../../navigators/AppRouteConfig';
import { StatusBar } from 'react-native';

const firstAction = AppRouteConfig.router.getActionForPathAndParams('LoggedIn');
const initialState = AppRouteConfig.router.getStateForAction(firstAction);

export const nav = (state = initialState, action) => {
    let nextState = AppRouteConfig.router.getStateForAction(action, state);

    if (action.routeName === 'TurnOnNotification' || action.routeName === 'LoggedIn') {
        StatusBar.setBarStyle('dark-content', true);
    } else if (typeof action.routeName === 'undefined' || action.routeName === 'LoggedOut') {
        StatusBar.setBarStyle('light-content', true);
    }

    return nextState || state;
};