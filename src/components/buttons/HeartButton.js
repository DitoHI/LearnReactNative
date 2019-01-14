import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export class HeartButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addToFavorite: false
        }
    }

    addToFavorite() {

    }

    render() {
        return (
            <TouchableOpacity>
                <View>
                    <Icon
                        name="heart"
                    />
                </View>
            </TouchableOpacity>
        );
    }
}