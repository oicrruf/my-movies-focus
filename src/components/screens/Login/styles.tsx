import {StyleSheet} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {color, font} from '../../../styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: color.black[0],
		paddingHorizontal: wp(3),
	},
	button: {
		backgroundColor: 'rgba(39, 39, 39, 1)',
		borderColor: 'rgba(255, 255, 255, 0.4)',
		borderWidth: 1,
	},
	containerButton: {
		marginTop: hp(4),
		marginHorizontal: wp(1.5),
	},
	titleButton: {
		color: 'white',
		marginHorizontal: 20,
		fontFamily: font.bold,
		fontSize: font.size.medium,
	},
	logo: {
		height: wp(38),
		width: wp(38),
		alignSelf: 'center',
		marginBottom: hp(4),
	},
	input: {
		fontFamily: font.regular,
		fontSize: font.size.medium,
		color: 'rgba(255, 255, 255, 0.7)',
	},
});
