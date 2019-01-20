import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from '@expo/vector-icons/FontAwesome';
import colors from '../styles/colors';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Stars extends Component {
    get stars() {
        const {votes, size, color} = this.props;
        const starNumbers = parseInt(votes);
        const starElements = [];
        for (let i = 0; i < 5; ++i) {
            starElements.push(
                <Icon
                    name="star"
                    size={size}
                    color={starNumbers > i ? color : colors.gray02}
                    style={styles.star}
                />
            );
        }
        return starElements;
    }

    render() {
        const { votes } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.stars}>
                    {this.stars}
                    {votes ? <Text style={styles.votesNumber}>{votes}</Text> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        marginRight: 1,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    votesNumber: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: 1,
        marginLeft: 3,
    }
});