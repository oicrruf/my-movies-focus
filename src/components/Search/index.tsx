import React, {useEffect, useRef, useState} from 'react';
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {Button, Image, SearchBar, Text} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getSearchingMovies, getUpcomingMovies} from '../../utils';
import {SignOutButton} from '../atoms';

interface Props {
	navigation: any;
	route: any;
	searching: any;
}

const Header: React.FC<Props> = ({searching}) => {
	const [inputSearch, setInputSearch] = useState('');

	useEffect(() => {
		getSearchingMovies(inputSearch)
			.then(m => {
				searching(m.results);
			})
			.catch(e => console.log(e));
	}, [inputSearch]);

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
	const moviesRef = useRef([]);

	return (
		<TouchableWithoutFeedback onPress={() => moviesRef.current[index].open()}>
			<View style={styles.itemList}>
				<Image
					source={{
						uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`,
					}}
					containerStyle={styles.imageList}
					PlaceholderContent={<ActivityIndicator />}
				/>
				<Text style={styles.itemText}>{detail.original_title}</Text>
				<RBSheet
					ref={el => (moviesRef.current[index] = el)}
					closeOnDragDown={true}
					closeOnPressMask={true}
					customStyles={{
						container: {
							backgroundColor: '#2b2b2b',
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							padding: 10,
						},
						wrapper: {
							backgroundColor: 'rgba(0,0,0,0.2)',
						},
						draggableIcon: {
							backgroundColor: '#000',
						},
					}}>
					<View style={styles.info}>
						<Image
							source={{
								uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${detail.poster_path}`,
							}}
							containerStyle={styles.imageSheet}
							PlaceholderContent={<ActivityIndicator />}
						/>
						<View style={styles.infoDetail}>
							<Text style={styles.text}>{detail.original_title}</Text>
							<Text style={styles.text}>{detail.release_date}</Text>
							<Text style={styles.textOverview}>{detail.overview}</Text>
							<Text style={styles.text}>{detail.vote_average}</Text>
							<Button
								title="Details & More"
								buttonStyle={styles.buttonStyle}
								containerStyle={styles.containerButtonStyle}
								titleStyle={styles.titleButtonStyle}
								onPress={() =>
									navigation.navigate('DetailScreen', {
										id: detail.id,
										poster_path: detail.poster_path,
										original_title: detail.original_title,
										overview: detail.overview,
										release_date: detail.release_date,
										vote_average: detail.vote_average,
									})
								}
							/>
						</View>
					</View>
				</RBSheet>
			</View>
		</TouchableWithoutFeedback>
	);
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
	headerRight: {flexDirection: 'row'},
});
