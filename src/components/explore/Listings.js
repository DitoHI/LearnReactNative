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
import HearButton, {HeartButton} from '../buttons/HeartButton';
import colors from '../../styles/colors';

export default class Listings extends Component {

    constructor(props) {
        super(props);
        this.renderListings = this.renderListings.bind(this);
    }

    get randomColor() {
        const colorsList = [
            colors.gray04,
            colors.darkOrange,
            colors.black,
            colors.brown01,
            colors.blue,
            colors.brown02,
            colors.green01,
        ];
        return colorsList[Math.floor(Math.random() * colorsList.length)];
    }

    renderListings() {
        const { listings, showAddToFav } = this.props;
        return listings.map((listing, index) => {
            return (
                <TouchableHighlight
                    style={styles.card}
                >
                    <View style={styles.cardContent}>
                        {showAddToFav ?
                        <HeartButton/>
                            : null
                        }
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={listing.photo}
                        />
                        <Text style={[{color: this.randomColor}, styles.listingType]}>{listing.type}</Text>
                        <Text
                            style={styles.listingTitle}
                            numberOfLines={2}
                        >
                            {listing.title}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }

    render() {
        const {title, boldTitle} = this.props;
        const titleStyle = boldTitle ? {fontSize: 22, fontWeight: '600'} : {fontSize: 18};
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={[titleStyle, styles.title]}>{title}</Text>
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
        marginBottom: 40,
    },
    card: {
        marginRight: 6,
        marginLeft: 6,
        width: 155,
        flexDirection: 'column',
        minHeight: 100,
    },
    cardContent: {},
    image: {
        width: undefined,
        flex: 1,
        height: 100,
        borderRadius: 5,
        marginBottom: 7,
    },
    listingTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.gray04,
        marginTop: 2,
    },
    listingType: {
        fontWeight: '700',

    },
});