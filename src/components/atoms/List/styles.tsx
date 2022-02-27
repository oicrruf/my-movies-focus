import {StyleSheet} from 'react-native';
import {color, font} from '../../../styles';

export default StyleSheet.create({
	info: {
		flexDirection: 'row',
		backgroundColor: color.gray[0],
	},
	infoDetail: {
		flexDirection: 'column',
		backgroundColor: color.gray[0],
		marginHorizontal: 10,
	},
	imageSheet: {
		aspectRatio: 9 / 16,
		width: '25%',
		borderRadius: 4,
	},
	textOverview: {
		fontFamily: font.light,
		fontSize: font.size.normal,
		color: color.white[0],
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
	titleButtonStyle: {
		marginHorizontal: 20,
		color: color.white[0],
		fontFamily: font.bold,
	},
	sheetTitle: {
		color: color.white[0],
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
		fontSize: font.size.normal,
		fontFamily: font.regular,
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
		width: 40,
		justifyContent: 'center',
	},
});
