import {StyleSheet} from 'react-native';
import {color, font} from '../../../styles';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
		width: wp(68),
	},
	image: {
		aspectRatio: 9 / 16,
		width: '100%',
		marginVertical: 10,
		borderRadius: 4,
	},
	others: {flex: 1, marginHorizontal: 10},
	buttonSearchStyle: {
		marginHorizontal: 20,
	},
	buttonStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 3,
	},
	containerButtonStyle: {
		marginVertical: hp(2.7),
		width: wp(68),
	},
	titleButtonStyle: {
		marginHorizontal: 20,
		color: color.white[0],
		fontFamily: font.bold,
	},
	sheetTitle: {
		width: wp(68),
		color: color.white[0],
		fontFamily: font.bold,
		fontSize: font.size.medium,
	},
	sheetSubTitleText: {
		color: 'rgba(255,255,255,0.4)',
		fontSize: font.size.small,
		fontFamily: font.bold,
	},
	sheetSubTitle: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	separator: {
		marginHorizontal: 5,
	},
});
