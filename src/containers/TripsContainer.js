import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class TripsContainer extends Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <Text>Trips Container</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        paddingTop: 50,
    },
});