import {StyleSheet} from 'react-native';

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
		bottom: 10,
		width: '100%',
	},
	others: {flex: 1, marginHorizontal: 10},
	text: {
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
		fontSize: 13,
		color: '#fff',
	},
	title: {
		color: '#fff',
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
		paddingHorizontal: 10,
	},
	footer: {
		color: 'rgba(255, 255, 255, 0.6)',
		fontWeight: '700',
		marginBottom: 10,
	},
	group: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '700',
		padding: 10,
	},
});
