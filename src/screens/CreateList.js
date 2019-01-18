import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import colors from '../styles/colors';
import NavBarButton from "../components/buttons/NavBarButton";
import InputField from '../components/forms/InputField';
import RadioInput from '../components/forms/RadioInput';

export default class CreateList extends Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft:
            <NavBarButton
                handleButtonPress={() => navigation.goBack()}
                location="left"
                icon={<Icon name="close" color={colors.lightBlack} size={30}/>}
            />,
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);
        this.state = {
            privacyOption: 'private',
        };
        this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
    }

    selectPrivacyOption(privacyOption) {
        this.setState({ privacyOption });
    }

    render() {
            const { privacyOption } = this.state;
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Create a list</Text>
                    <View style={styles.content}>
                        <View style={styles.inputWrapper}>
                            <InputField
                                labelText="Title"
                                labelTextSize={18}
                                labelTextWeight="400"
                                labelColor={colors.lightBlack}
                                textColor={colors.lightBlack}
                                placeholder="Some text..."
                                value="Some value..."
                                showCheckmark={false}
                                autoFocus={true}
                                inputType="text"
                                inputStyle={styles.inputStyle}
                                borderBottomColor={colors.gray06}
                            />
                        </View>
                        <View style={styles.privacyOptions}>
                            <Text style={styles.privacyHeading}>Privacy</Text>
                            <TouchableHighlight
                                style={styles.privacyOptionsItem}
                                underlayColor={colors.gray01}
                                onPress={ () => this.selectPrivacyOption('public') }
                            >
                                <View>
                                    <Text style={styles.privacyOptionsTitle}>Public</Text>
                                    <Text style={styles.privacyOptionsDescription}>Visible to everyone and included on your public Airbnb profile.</Text>
                                    <View style={styles.privacyRadioInput}>
                                        <RadioInput
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selectedBorderColor={colors.green01}
                                            iconColor={colors.white}
                                            selected={privacyOption === 'public'}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <View style={styles.divider}></View>
                            <TouchableHighlight
                                style={styles.privacyOptionsItem}
                                underlayColor={colors.gray01}
                                onPress={ () => this.selectPrivacyOption('private') }
                            >
                                <View>
                                    <Text style={styles.privacyOptionsTitle}>Private</Text>
                                    <Text style={styles.privacyOptionsDescription}>Visible to only to you and any friends you invite.</Text>
                                    <View style={styles.privacyRadioInput}>
                                        <RadioInput
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selectedBorderColor={colors.green01}
                                            iconColor={colors.white}
                                            selected={privacyOption === 'private'}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    closeButton: {
        position: 'absolute',
        left: 20,
    },
    headerStyle: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        elevation: 0,
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.lightBlack,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
    },
    content: {
        paddingTop: 50,
    },
    inputWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputStyle: {
        fontSize: 24,
        fontWeight: '400',
        paddingBottom: 30,
    },
    privacyOptions: {
        marginTop: 40,
    },
    privacyHeading: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.lightBlack,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    privacyOptionsItem: {
        flex: 1,
        padding: 20,
    },
    privacyOptionsTitle: {
        fontSize: 16,
        fontWeight: '200',
        color: colors.lightBlack,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        height: 1,
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    privacyOptionsDescription: {
        fontSize: 14,
        fontWeight: '200',
        color: colors.lightBlack,
        marginTop: 10,
        paddingRight: 90,
    },
    privacyRadioInput: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});