import {StyleSheet} from 'react-native';
import {font, color} from '../../../styles';

export default StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		height: 550,
		width: '100%',
	},
	image: {
		aspectRatio: 9 / 12,
		width: '100%',
		opacity: 0.6,
	},
	detail: {
		position: 'absolute',
		bottom: 25,
		width: '100%',
	},
	others: {flex: 1, marginHorizontal: 10},
	text: {
		fontFamily: font.light,
		fontSize: font.size.normal,
		color: 'rgba(255, 255, 255, 0.8)',
		padding: 10,
		width: '100%',
		textAlign: 'center',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 20,
	},
	genresText: {
		fontFamily: font.medium,
		fontSize: font.size.small,
		color: 'rgba(255, 255, 255, 0.8)',
	},
	title: {
		fontFamily: font.bold,
		fontSize: font.size.lg,
		color: color.white[0],
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	footer: {
		fontFamily: font.bold,
		fontSize: font.size.medium,
		color: 'rgba(255, 255, 255, 0.7)',
		marginBottom: 15,
	},
	group: {
		fontFamily: font.bold,
		color: color.white[0],
		fontSize: font.size.medium,
		padding: 10,
	},
});
