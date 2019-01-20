import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from '@expo/vector-icons/FontAwesome';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import HeartButton from '../buttons/HeartButton';
import Stars from '../Stars';
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
        const {listings, showAddToFav, handleAddToFav, favouriteListings} = this.props;
        return listings.map((listing, index) => {
            return (
                <TouchableHighlight
                    style={styles.card}
                >
                    <View>
                        {showAddToFav ?
                            <View style={styles.addToFavoriteBtn}>
                                <HeartButton
                                    color={colors.white}
                                    selectedColor={colors.pink}
                                    selected={favouriteListings.indexOf(listing.id) > -1}
                                    onPress={() => handleAddToFav(listing)}
                                />
                            </View>
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
                        <Text style={styles.listingPrice}>£{listing.price} {listing.priceType}</Text>
                        <Stars
                            votes={listing.stars}
                            size={18}
                            color={colors.green02}
                        />
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

Listings.propTypes = {
    title: PropTypes.string.isRequired,
    boldTitle: PropTypes.bool,
    listings: PropTypes.array.isRequired,
    showAddToFav: PropTypes.bool,
    handleToFav: PropTypes.func,
    favouriteListings: PropTypes.array,
};

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
    addToFavoriteBtn: {
        position: 'absolute',
        right: 12,
        top: 7,
        zIndex: 2,
    },
    listingPrice: {
        color: colors.gray04,
        marginTop: 4,
        marginBottom: 2,
        fontSize: 12,
        fontWeight: '300',
    },
});