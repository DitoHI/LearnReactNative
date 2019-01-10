import CreateReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import AppRouteConfig from '../../navigators/AppRouteConfig';

const firstAction = AppRouteConfig.router.getActionForPathAndParams('LoggedOut');
const initialState = AppRouteConfig.router.getStateForAction(firstAction);

export const nav = (state = initialState, action) => {
    let nextState = AppRouteConfig.router.getStateForAction(action, state);
    return nextState || state;
};