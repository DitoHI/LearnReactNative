import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import colors from '../styles/colors';
import NavBarButton from "../components/buttons/NavBarButton";

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

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>
                        Create a list
                    </Text>
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
    scrollView: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.lightBlack,
    },
});