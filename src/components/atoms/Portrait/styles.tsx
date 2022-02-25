import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
		borderRadius: 4,
	},
	imageSheet: {
		aspectRatio: 9 / 16,
		width: '25%',
		borderRadius: 4,
	},
	others: {flex: 1, marginHorizontal: 10},
	buttonSearchStyle: {
		marginHorizontal: 20,
	},
	textOverview: {
		fontSize: 12,
		color: '#fff',
		width: 265,
	},
	buttonStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 3,
	},
	containerButtonStyle: {
		height: 40,
		width: '100%',
		marginVertical: 10,
	},
	titleButtonStyle: {marginHorizontal: 20, color: '#fff'},
	sheetTitle: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
	},
	sheetSubTitleText: {
		color: 'rgba(255,255,255,0.4)',
		fontSize: 12,
	},
	sheetSubTitle: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	separator: {
		marginHorizontal: 5,
	},
});
