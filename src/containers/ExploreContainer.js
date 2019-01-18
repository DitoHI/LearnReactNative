import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import categoriesList from '../data/categories';
import listings from '../data/listings';

export default class ExploreContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favouriteListings: [],
        };

        this.renderListings = this.renderListings.bind(this);
        this.handleAddToFav = this.handleAddToFav.bind(this);
        this.onCreateListClose = this.onCreateListClose.bind(this);
    }

    handleAddToFav(listing) {
        const { navigate } = this.props.navigation;
        let { favouriteListings } = this.state;

        const index = favouriteListings.indexOf(listing.id);
        if (index > -1) {
            favouriteListings = favouriteListings.filter(item => item !== listing.id);
            this.setState({favouriteListings});
        } else {
            navigate('CreateList', { listing, onCreateListClose: this.onCreateListClose });
        }
    }

    onCreateListClose(listingId, listCreated) {
        let { favouriteListings } = this.state;
        if (listCreated) {
            favouriteListings.push(listingId);
        } else {
            favouriteListings = favouriteListings.filter(item => item !== listingId);
        }
        this.setState({ favouriteListings });
    }

    renderListings() {
        return listings.map((listing, index) => {
            return (
                <View
                    key={`listing-${index}`}
                >
                    <Listings
                        key={`listing-item-${index}`}
                        title={listing.title}
                        boldTitle={listing.boldTitle}
                        listings={listing.listings}
                        showAddToFav={listing.showAddToFav}
                        handleAddToFav={this.handleAddToFav}
                        favouriteListings={this.state.favouriteListings}
                    />
                </View>
            );
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <SearchBar/>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text style={styles.heading}>Explore Airbnb</Text>
                    <View style={styles.categories}>
                        <Categories categories={categoriesList}/>
                    </View>
                    {this.renderListings()}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollView: {
        paddingTop: 80,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    categories: {
        marginBottom: 40,
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 20,
        color: colors.gray04,
    },
});