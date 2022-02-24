import React, {useEffect, useState} from 'react';
import {Image, SearchBar} from 'react-native-elements';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import {getUpcomingMovies} from '../../utils';

const SearchItem: React.FC = props => {
	const {detail} = props;

	return (
		<View style={styles.itemList}>
			<Image
				source={{
					uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`,
				}}
				containerStyle={styles.imageList}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<Text style={styles.itemText}>{detail.original_title}</Text>
		</View>
	);
};

const Header: React.FC = () => {
	const [search, setSearch] = useState('');

	const searchMovie = (name: string) => {
		setSearch(name);
	};

	useEffect(() => {
		console.log(search);
	}, [search]);
	return (
		<View style={{backgroundColor: '#000', flex: 1}}>
			<SearchBar
				placeholder="Search for a movie"
				onChangeText={searchMovie}
				value={search}
				containerStyle={styles.searchBarContainerStyle}
				inputContainerStyle={styles.searchBarInputContainerStyle}
			/>
			<Text style={styles.topSearch}>Top Searches</Text>
		</View>
	);
};

const Search: React.FC = () => {
	const [searchMovies, setSearhMovies] = useState([]);

	useEffect(() => {
		getUpcomingMovies()
			.then(movies => {
				setSearhMovies(movies.results);
			})
			.catch(e => console.log(e));
	}, []);

	return (
		<SafeAreaView style={styles.MainContainer}>
			<FlatList
				data={searchMovies}
				renderItem={({item}) => <SearchItem detail={item} />}
				// keyExtractor={item => item.id}
				// ItemSeparatorComponent={ItemDivider}
				ListHeaderComponent={Header}
				ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
				stickyHeaderIndices={[0]}
			/>
		</SafeAreaView>
	);
};

export default Search;

const styles = StyleSheet.create({
	searchBarContainerStyle: {height: 55, backgroundColor: '#000'},
	searchBarInputContainerStyle: {backgroundColor: '#393e42', height: 35},
	MainContainer: {
		flex: 1,
		backgroundColor: 'white',
	},

	item: {
		paddingLeft: 15,
		paddingTop: 8,
		paddingBottom: 8,
	},

	ListHeaderComponentStyle: {
		borderBottomColor: '#000',
		borderBottomWidth: 0,
	},
	topSearch: {
		color: '#fff',
		marginHorizontal: 10,
		marginBottom: 10,
		fontWeight: '900',
		fontSize: 20,
	},
	imageList: {
		height: 80,
		width: 120,
	},
	itemList: {
		backgroundColor: '#21201E',
		flexDirection: 'row',
		borderColor: '#000',
		borderWidth: 1,
		alignContent: 'center',
	},
	itemText: {color: '#cac7c5', textAlignVertical: 'center', margin: 10},
});
