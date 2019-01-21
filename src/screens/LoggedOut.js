import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import Icon from '@expo/vector-icons/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import transparentHeaderStyle from '../styles/navigation';
import androidSize from '../helpers/utils';

const size = androidSize();
let termsTextSize = 13;
let headingTextSize = 30;

if (size === 'small') {
    termsTextSize = 12;
    headingTextSize = 26
}

export default class LoggedOut extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton
            handleButtonPress={() => navigation.navigate('LogIn')}
            location="right"
            color={colors.white}
            text="Log In"
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    onFacebookPress() {
        alert('Facebook button pressed');
    }

    onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    onMoreOptionButtonPress() {
        alert('More Option button pressed');
    }

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        textAlign="center"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                        iconPosition="left"
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                        textAlign="center"
                    />
                    <TouchableHighlight
                        style={styles.moreOptionButton}
                        onPress={this.onMoreOptionButtonPress}>
                        <Text style={styles.moreOptionButtonText}>More Options</Text>
                    </TouchableHighlight>
                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More options</Text>
                        <Text style={styles.termsText}>I agree to Airbnb's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40,
    },
    welcomeText: {
        fontSize: headingTextSize,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'absolute',
        left: 5,
        zIndex: 0,
    },
    moreOptionButton: {
        marginTop: 10,
    },
    moreOptionButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: termsTextSize,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});
