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

export default class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="search"
                size={22}
                color={tintColor}
            />
        ),
    };

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