import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {SearchBar, Text} from 'react-native-elements';
import {getSearchingMovies, getUpcomingMovies} from '../../utils';
import List from '../atoms/List';

interface Props {
	navigation: any;
	route: any;
	searching: any;
}

const Header: React.FC<Props> = props => {
	const {searching} = props;
	const [inputSearch, setInputSearch] = useState('');

	useEffect(() => {
		getSearchingMovies(inputSearch)
			.then(m => {
				searching(m.results);
			})
			.catch(e => console.log(e));
	}, [inputSearch, searching]);

	return (
		<View style={{backgroundColor: '#000', flex: 1}}>
			<SearchBar
				placeholder="Search for a movie"
				onChangeText={setInputSearch}
				onClear={() => {
					setInputSearch('');
				}}
				value={inputSearch}
				containerStyle={styles.searchBarContainerStyle}
				inputContainerStyle={styles.searchBarInputContainerStyle}
			/>
			<Text style={styles.topSearch}>Top Searches</Text>
		</View>
	);
};

const SearchItem: React.FC<Props> = props => {
	const {detail, index, navigation} = props;
	return <List navigation={navigation} item={detail} index={index} />;
};

const Search: React.FC<Props> = ({navigation}) => {
	const [searchMovies, setSearhMovies] = useState([]);

	// TODO: Agregar el botón de cerrar sesión
	// useEffect(() => {
	// 	navigation.setOptions({
	// 		headerRight: () => (
	// 			<View style={styles.headerRight}>
	// 				<SignOutButton navigation={navigation} />
	// 			</View>
	// 		),
	// 	});
	// }, [navigation]);

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
				renderItem={({item}) => (
					<SearchItem detail={item} navigation={navigation} />
				)}
				keyExtractor={item => item.id}
				ListHeaderComponent={<Header searching={setSearhMovies} />}
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

	headerRight: {flexDirection: 'row'},
});
