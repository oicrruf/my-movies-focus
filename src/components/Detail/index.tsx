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
import {getRelatedMovies} from '../../utils';
import {SearchButton, SignOutButton} from '../atoms';
import MainMovie from '../molecules/MainMovie';

interface Props {
	navigation: any;
	route: any;
}

const Detail: React.FC<Props> = ({route, navigation}) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const moviesRef = useRef([]);

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
								<Text style={styles.text}>{item.overview}</Text>
								<Text style={styles.text}>{item.vote_average}</Text>
								<Button
									title="Details & More"
									buttonStyle={styles.buttonStyle}
									containerStyle={styles.containerButtonStyle}
									titleStyle={styles.titleButtonStyle}
									onPress={() =>
										navigation.navigate('DetailScreen', {
											id: item.id,
											poster_path: item.poster_path,
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

export default Detail;

const styles = StyleSheet.create({
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
	buttonSearchStyle: {
		marginHorizontal: 20,
	},
	headerRight: {flexDirection: 'row'},
});
