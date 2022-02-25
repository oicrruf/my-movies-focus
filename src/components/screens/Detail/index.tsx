import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getRelatedMovies} from '../../../utils';
import {Portrait, SearchButton, SignOutButton} from '../../atoms';
import MainMovie from '../../molecules/MainMovie';
import styles from './styles';

interface Props {
	navigation: any;
	route: any;
}

const Detail: React.FC<Props> = ({route, navigation}) => {
	const [popularMovies, setPopularMovies] = useState([]);

	const {
		id,
		original_title,
		release_date,
		overview,
		vote_average,
		poster_path,
	} = route.params;

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

	useEffect(() => {
		getRelatedMovies(id)
			.then(movies => {
				setPopularMovies(movies.results);
			})
			.catch(e => console.log(e));
	}, [id]);

	const renderItem = ({item, index}) =>
		index === 0 ? (
			<MainMovie
				id={id}
				poster_path={poster_path}
				original_title={original_title}
				overview={overview}
				release_date={release_date}
				vote_average={vote_average}
				group={'Related movies'}
			/>
		) : (
			<Portrait navigation={navigation} item={item} index={index} />
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

export default Detail;
