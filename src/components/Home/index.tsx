import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {getPopularMovies} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const Home: React.FC = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getPopularMovies()
			.then(movies => {
				setPopularMovies(movies.results);
			})
			.catch(e => console.log(e));
	}, []);

	const renderItem = ({item, index}) =>
		index === 0 ? (
			<View style={styles.mainContainer}>
				<View>
					<Image
						source={{
							uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.backdrop_path}`,
						}}
						containerStyle={styles.main}
						PlaceholderContent={<ActivityIndicator />}
					/>
					<View style={styles.detail}>
						<LinearGradient colors={['transparent', '#000']}>
							<Text style={styles.text}>{item.original_title}</Text>
							<Text style={styles.text}>{item.overview}</Text>
							<Text style={styles.text}>{item.release_date}</Text>
							<Text style={styles.text}>{item.vote_average}</Text>
						</LinearGradient>
					</View>
				</View>
			</View>
		) : (
			<View style={styles.others}>
				<Image
					source={{
						uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
					}}
					containerStyle={styles.image}
					PlaceholderContent={<ActivityIndicator />}
				/>
			</View>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	image: {
		aspectRatio: 9 / 16,
		width: '100%',
		marginVertical: 10,
	},
	mainContainer: {
		flexDirection: 'row',
		height: 500,
		width: '100%',
	},
	main: {
		aspectRatio: 9 / 11,
		width: '100%',
	},
	others: {flex: 1, marginHorizontal: 10},
	text: {
		color: '#fff',
		padding: 5,
	},
	detail: {
		position: 'absolute',
		bottom: 20,
	},
});
