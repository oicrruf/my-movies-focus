import moment from 'moment';
import React, {useRef} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import RBSheet from 'react-native-raw-bottom-sheet';
import Loading from '../Loading';
import styles from './styles';

interface Props {
	navigation: object;
	item: any;
	index: any;
}

const List: React.FC<Props> = props => {
	const {navigation, item, index} = props;
	const moviesRef = useRef([]);

	return (
		<TouchableWithoutFeedback onPress={() => moviesRef.current[index].open()}>
			<View style={styles.itemList}>
				<Image
					source={{
						uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
					}}
					containerStyle={styles.imageList}
					PlaceholderContent={
						<Loading width={120} height={80} backgroundColor={'#21201e'} />
					}
				/>
				<View style={styles.listBody}>
					<Text style={styles.itemText}>{item.original_title}</Text>
					<Icon
						name="info"
						type="feather"
						color="rgba(255,255,255,0.5)"
						containerStyle={styles.icon}
						tvParallaxProperties={undefined}
					/>
				</View>
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
						/>
						<View style={styles.infoDetail}>
							<Text style={styles.sheetTitle}>{item.original_title}</Text>
							<View style={styles.sheetSubTitle}>
								<Text style={styles.sheetSubTitleText}>
									{moment(item.release_date).format('YYYY')}
								</Text>
								<Text style={[styles.sheetSubTitleText, styles.separator]}>
									·
								</Text>
								<Text style={styles.sheetSubTitleText}>
									{item.vote_average}
								</Text>
							</View>
							<Text
								style={styles.textOverview}
								ellipsizeMode="tail"
								numberOfLines={7}>
								{item.overview}
							</Text>
						</View>
					</View>
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
								overview: item.overview,
								release_date: item.release_date,
								vote_average: item.vote_average,
							})
						}
					/>
				</RBSheet>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default List;
