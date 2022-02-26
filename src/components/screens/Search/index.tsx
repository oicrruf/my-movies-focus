import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {getUpcomingMovies} from '../../../utils';
import List from '../../atoms/List';
import SearchBar from '../../atoms/SearchBar';
import styles from './styles';
interface Props {
	navigation: any;
	route: any;
	searching: any;
	detail: any;
	index: number;
}

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
				ListHeaderComponent={<SearchBar searching={setSearhMovies} />}
				ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
				stickyHeaderIndices={[0]}
			/>
		</SafeAreaView>
	);
};

export default Search;
