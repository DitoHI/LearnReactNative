import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default class Listings extends Component {
    renderListings() {
        const { listings } = this.props;
        return listings.map((listing, index) => {
            return (
                <TouchableHighlight
                    style={styles.card}
                >
                    <View style={styles.cardContent}>
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={listing.photo}
                        />
                        <Text>{listing.title}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }

    render() {
        const {title} = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity style={styles.seeAllBtn}>
                        <Text style={styles.seeAllBtnText}>See All</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={colors.gray04}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{paddingRight: 30}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderListings()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 21,
        paddingLeft: 21,
    },
    title: {
        color: colors.gray04,
    },
    seeAllBtn: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seeAllBtnText: {
        color: colors.gray04,
        marginRight: 5,
    },
    scrollView: {
        marginTop: 20,
        marginLeft: 15,
    },
    card: {
        marginRight: 6,
        marginLeft: 6,
        width: 155,
        flexDirection: 'column',
        minHeight: 100,
    },
    cardContent: {

    },
    image: {
        width: undefined,
        flex: 1,
        height: 100,
        borderRadius: 5,
        marginBottom: 7,
    },
});