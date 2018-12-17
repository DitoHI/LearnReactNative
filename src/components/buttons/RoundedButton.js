import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render() {
        const {text, textColor, background, icon, handleOnPress} = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableHighlight
                style={[{backgroundColor}, style.wrapper]}
                onPress={handleOnPress} >
                <View style={style.buttonTextWrapper}>
                    {icon}
                    <Text style={[{color}, style.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired,
};

const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});