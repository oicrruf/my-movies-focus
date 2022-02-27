import {StyleSheet} from 'react-native';
import {color, font} from '../../../styles';

export default StyleSheet.create({
	searchBarContainerStyle: {backgroundColor: color.black[0]},
	searchBarInputContainerStyle: {backgroundColor: color.gray[1]},
	MainContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	topSearch: {
		color: color.white[0],
		marginHorizontal: 10,
		marginTop: 5,
		marginBottom: 15,
		fontFamily: font.bold,
		fontSize: font.size.medium,
	},
	container: {backgroundColor: color.black[0], flex: 1},
});
