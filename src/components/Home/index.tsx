import React, {useEffect, useRef, useState} from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getPopularMovies} from '../../utils';
import {SearchButton, SignOutButton} from '../atoms';

interface Props {
	navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const moviesRef = useRef([]);

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
			<View style={styles.mainContainer}>
				<View>
					<Image
						source={{
							uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`,
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
			<TouchableWithoutFeedback onPress={() => moviesRef.current[index].open()}>
				<View style={styles.others}>
					<Image
						source={{
							uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
						}}
						containerStyle={styles.image}
						PlaceholderContent={<ActivityIndicator />}
					/>
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
									uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
								}}
								containerStyle={styles.imageSheet}
								PlaceholderContent={<ActivityIndicator />}
							/>
							<View style={styles.infoDetail}>
								<Text style={styles.text}>{item.original_title}</Text>
								<Text style={styles.text}>{item.release_date}</Text>
								<Text style={styles.textOverview}>{item.overview}</Text>
								<Text style={styles.text}>{item.vote_average}</Text>
								<Button
									title="Details & More"
									buttonStyle={styles.buttonStyle}
									containerStyle={styles.containerButtonStyle}
									titleStyle={styles.titleButtonStyle}
									onPress={() =>
										navigation.navigate('DetailScreen', {
											id: item.id,
											backdrop_path: item.poster_path,
											original_title: item.original_title,
											release_date: item.release_date,
											overview: item.overview,
											vote_average: item.vote_average,
										})
									}
								/>
							</View>
						</View>
					</RBSheet>
				</View>
			</TouchableWithoutFeedback>
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
	buttonSearchStyle: {
		marginHorizontal: 20,
	},

	textOverview: {
		fontSize: 10,
		color: '#fff',
	},
	buttonStyle: {
		backgroundColor: 'rgba(244, 244, 244, 1)',
		borderRadius: 3,
	},
	containerButtonStyle: {
		height: 40,
		width: 200,
		marginHorizontal: 50,
		marginVertical: 10,
	},
	titleButtonStyle: {marginHorizontal: 20, color: 'black'},
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	info: {
		flexDirection: 'row',
		backgroundColor: '#2b2b2b',
	},
	infoDetail: {
		flexDirection: 'column',
		backgroundColor: '#2b2b2b',
		marginHorizontal: 10,
	},
	image: {
		aspectRatio: 9 / 16,
		width: '100%',
		marginVertical: 10,
	},
	imageSheet: {
		aspectRatio: 9 / 16,
		width: '25%',
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
	headerRight: {flexDirection: 'row'},
});
