import React, {FC, useEffect, useState} from 'react';
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

const Search: FC<Props> = ({navigation}) => {
	const [searchMovies, setSearhMovies] = useState<any[]>([]);

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
				renderItem={({item, index}) => (
					<List navigation={navigation} item={item} index={index} />
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
