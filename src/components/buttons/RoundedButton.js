import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View,
} from 'react-native';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render() {
        const {
            text,
            loading,
            disabled,
            textColor,
            textSize,
            textWeight,
            iconPosition,
            textAlign,
            borderColor,
            background,
            icon,
            handleOnPress,
        } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        const fontSize = textSize || 16;
        const fontWeight = textWeight || '600';
        const alignPosition = textAlign || 'center';
        const iconLocation = iconPosition || 'left';
        const border = borderColor || colors.white;
        const opacityStyle = disabled || loading ? 0.5 : 1;
        const textOpacity = loading ? 0 : 1;
        const rippleColor = backgroundColor === 'transparent' ? color : 'rgba(0,0,0,0.4)';

        const ButtonComponent = (buttonProps) => {
            if (Platform.OS === 'ios') {
                return(
                    <TouchableOpacity
                        style={[{opacity: opacityStyle, backgroundColor, borderColor: border}, style.iosWrapper]}
                        onPress={handleOnPress}
                        activeOpacity={0.6}
                        disabled={disabled || loading}
                    >
                        {buttonProps.children}
                    </TouchableOpacity>
                );
            }
            return(
                <View style={[style.androidWrapper, { borderColor: border }]}>
                    <TouchableNativeFeedback
                        useForeground={true}
                        onPress={handleOnPress}
                        disabled={disabled || loading}
                        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                    >
                        <View style={[ { opacity: opacityStyle, backgroundColor }, style.androidButtonText ]}>
                            {buttonProps.children}
                        </View>
                    </TouchableNativeFeedback>
                </View>
            );
        };

        return (
            <ButtonComponent>
                <View style={style.buttonTextWrapper}>
                    {iconLocation === 'left' && !loading ?
                        <View style={{opacity: opacityStyle}}>{icon}</View>
                        : null}
                    {loading ?
                        <View style={style.loaderContainer}>
                            <Image
                                style={style.loaderImage}
                                source={require('../../img/whiteLoader.gif')}
                            />
                        </View> : null
                    }
                    <Text style={[{
                        opacity: opacityStyle,
                        fontSize,
                        fontWeight,
                        textAlign,
                        alignPosition,
                        color,
                    }, style.buttonText]}>{text}</Text>
                    {iconLocation === 'right' && !loading ?
                        <View style={{opacity: opacityStyle}}>{icon}</View>
                        : null}
                </View>
            </ButtonComponent>
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    textSize: PropTypes.string,
    textWeight: PropTypes.string,
    textAlign: PropTypes.string,
    background: PropTypes.string,
    borderColor: PropTypes.string,
    icon: PropTypes.object,
    iconPosition: PropTypes.string,
    handleOnPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};

const style = StyleSheet.create({
    iosWrapper: {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center',
    },
    androidWrapper: {
        overflow: 'hidden',
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 15,
    },
    androidButtonText: {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        alignItems: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        width: '100%',
    },
    loaderContainer: {
        width: 90,
        height: 90,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
    },
    loaderImage: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 15,
        left: '50%',
        marginLeft: -20,
        top: '50%',
        marginTop: -20,
    }
});