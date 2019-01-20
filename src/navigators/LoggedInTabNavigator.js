import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
}  from 'react-navigation';
import PropTypes from 'prop-types';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import colors from '../styles/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const ExploreTab = createStackNavigator({
    ExploreContainer: {
        screen: ExploreContainer,
        navigationOptions: {
            header: null,
        },
    },
    CreateList: { screen: CreateList },
}, {
    mode: 'modal',
});

ExploreTab.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const CustomTabBarIcon = (name, size, Icon) => {
    const icon = ({ tintColor }) => (
        <Icon
            name={name}
            size={size}
            color={tintColor}
        />
    );

    icon.propTypes = {
        tintColor: PropTypes.string.isRequired,
    };

    return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
    Explore: {
        screen: ExploreTab,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: CustomTabBarIcon('search', 22, FontAwesome),
        }
    },
    Saved: {
        screen: SavedContainer,
        navigationOptions: {
            tabBarLabel: 'SAVED',
            tabBarIcon: CustomTabBarIcon('heart-o', 22, FontAwesome),
        },
    },
    Trips: {
        screen: TripsContainer,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: CustomTabBarIcon('logo-ionic', 22, Ionicons),
        },
    },
    Inbox: {
        screen: InboxContainer,
        navigationOptions: {
            tabBarLabel: 'INBOX',
            tabBarIcon: CustomTabBarIcon('inbox', 25, FontAwesome),
        },
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: CustomTabBarIcon('user-o', 22 , FontAwesome),
        },
    },
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5,
        },
        activeTintColor: colors.pink,
    },
    tabBarPosition: 'bottom',
});

const App = createAppContainer(LoggedInTabNavigator);

export default App;