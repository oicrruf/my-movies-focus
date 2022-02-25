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
	imageSheet: {
		aspectRatio: 9 / 16,
		width: '25%',
		borderRadius: 4,
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
	imageList: {
		height: 80,
		width: 120,
	},
	itemList: {
		backgroundColor: '#21201E',
		flexDirection: 'row',
		borderColor: '#000',
		borderWidth: 1,
	},
	itemText: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 15,
		textAlignVertical: 'center',
		margin: 20,
	},
	listBody: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		width: '100%',
	},
	icon: {
		width: 65,
		justifyContent: 'center',
	},
});
