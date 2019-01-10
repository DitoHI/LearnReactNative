/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Root, configureStore } from './src/navigators/AppNavigator';

console.disableYellowBox = true;
export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore({})}>
                <Root />
            </Provider>
        )
    }
}
