import {StyleSheet} from 'react-native';
import {color, font} from '../../../styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: color.black[0],
	},
	button: {
		backgroundColor: 'rgba(39, 39, 39, 1)',
		borderColor: 'rgba(255, 255, 255, 0.4)',
		borderWidth: 1,
	},
	containerButton: {
		marginTop: 20,
		marginHorizontal: 8,
	},
	titleButton: {
		color: 'white',
		marginHorizontal: 20,
		fontFamily: font.bold,
		fontSize: font.size.medium,
	},
	logo: {
		height: 150,
		width: 150,
		alignSelf: 'center',
		marginBottom: 20,
	},
	input: {
		fontFamily: font.regular,
		fontSize: font.size.medium,
		color: 'rgba(255, 255, 255, 0.7)',
	},
});
