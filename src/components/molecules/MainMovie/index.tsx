import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import LinearGradient from 'react-native-linear-gradient';
import {getMovieInfo} from '../../../utils';
import styles from './styles';
import moment from 'moment';

interface Props {
	id: number;
	poster_path: string;
	original_title: string;
	overview: string;
	release_date: string;
	vote_average: number;
	group: string;
}

const MainMovie: React.FC<Props> = props => {
	const {
		id,
		poster_path,
		original_title,
		overview,
		release_date,
		vote_average,
		group,
	} = props;
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		getMovieInfo(id)
			.then(movie => setGenres(movie.genres))
			.catch(error => console.log(error));
	}, [id]);

	return (
		<View style={styles.mainContainer}>
			<View>
				<Image
					source={{
						uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`,
					}}
					containerStyle={styles.image}
					PlaceholderContent={<ActivityIndicator />}
				/>
				<View style={styles.detail}>
					<LinearGradient colors={['transparent', '#000', '#000']}>
						<Text style={styles.title} h3>
							{original_title}
						</Text>

						<View style={styles.row}>
							{genres.map(genre => (
								<Text style={styles.genresText}>{genre.name}</Text>
							))}
						</View>
						<Text style={styles.text}>{overview}</Text>
						<View style={styles.row}>
							<Text style={styles.footer}>
								{moment(release_date).format('YYYY')}
							</Text>
							<Text style={styles.footer}>{vote_average.toFixed(2)}</Text>
						</View>
						<Text style={styles.group}>{group}</Text>
					</LinearGradient>
				</View>
			</View>
		</View>
	);
};

export default MainMovie;
