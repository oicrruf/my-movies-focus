import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getPopularMovies} from '../../../utils';
import MainMovie from '../../atoms/MainMovie';
import Portrait from '../../atoms/Portrait';
import SearchButton from '../../atoms/SearchButton';
import SignOutButton from '../../atoms/SignOutButton';
import styles from './styles';
interface Props {
	navigation: any;
}

const Home: FC<Props> = props => {
	const {navigation} = props;
	const [popularMovies, setPopularMovies] = useState<any[]>([]);

	useEffect(() => {
		getPopularMovies()
			.then(movies => {
				setPopularMovies(movies.results);
			})
			.catch(e => console.log(e));
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={styles.headerRight}>
					<SearchButton navigation={navigation} />
					<SignOutButton navigation={navigation} />
				</View>
			),
		});
	}, [navigation]);

	const renderItem = ({item, index}) =>
		index === 0 ? (
			<MainMovie
				id={item.id}
				poster_path={item.poster_path}
				original_title={item.original_title}
				overview={item.overview}
				release_date={item.release_date}
				vote_average={item.vote_average}
				group={'Popular Movies'}
				key={item.id}
			/>
		) : (
			index <= 14 && (
				<Portrait navigation={navigation} item={item} index={index} />
			)
		);

	return (
		<View style={styles.container}>
			<FlatList
				data={popularMovies}
				numColumns={3}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default Home;
