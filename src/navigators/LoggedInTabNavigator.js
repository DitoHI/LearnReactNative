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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
            tabBarIcon: CustomTabBarIcon('search', 22, FontAwesomeIcon),
        }
    },
    Saved: {screen: SavedContainer},
    Trips: {screen: TripsContainer},
    Inbox: {screen: InboxContainer},
    Profile: {screen: ProfileContainer},
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5,
        },
        activeTintColor: colors.pink,
    },
});
const App = createAppContainer(LoggedInTabNavigator);

export default App;