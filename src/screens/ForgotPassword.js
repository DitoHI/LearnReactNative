import React, {Component} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/forms/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';
import NavBarButton from "../components/buttons/NavBarButton";
import transparentHeaderStyle from "../styles/navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ForgotPassword extends Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color={colors.white} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            emailAddress: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({emailAddress: email});
        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({validEmail: true});
            }
        } else {
            if (!emailCheckRegex.test(email)) {
                this.setState({validEmail: false});
            }
        }
    }

    goToNextStep() {
        this.setState({loadingVisible: true});
        setTimeout(() => {
            // basic validation
            if (this.state.emailAddress === 'wrong@email.com') {
                this.setState({
                    loadingVisible: false,
                    formValid: false,
                });
            } else {
                this.setState({
                    loadingVisible: false,
                    formValid: true,
                });
            }
        }, 2000);
    }

    handleCloseNotification() {
        this.setState({formValid: true});
    }

    render() {
        const {loadingVisible, formValid, validEmail} = this.state;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const showNotification = !formValid;
        return (
            <KeyboardAvoidingView
                style={[{backgroundColor: background}, styles.wrapper]}
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.forgotPasswordHeading}>Forgot Your Password? </Text>
                        <Text style={styles.forgotPasswordSubheading}>Enter your email to find your account</Text>
                        <InputField
                            customStyle={{marginBottom: 30}}
                            textColor={colors.white}
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                        />
                    </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.goToNextStep}
                        disabled={!validEmail}
                    />
                </View>
                <Loader
                    animationType="fade"
                    modalVisible={loadingVisible}
                />
                <View style={styles.notificationWrapper}>
                    <Notification
                        type="Error"
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        firstLine="No account exists for the requested"
                        secondLine="email address."
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300',
    },
    forgotPasswordSubheading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
