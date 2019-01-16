import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import NoResults from '../components/saved/NoResults';
import colors from '../styles/colors';

export default class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="heart-o"
                size={22}
                color={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <NoResults/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        backgroundColor: colors.white,
    },
});