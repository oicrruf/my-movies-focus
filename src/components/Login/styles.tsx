import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#000',
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
	titleButton: {color: 'white', marginHorizontal: 20},
	logo: {
		height: 150,
		width: 150,
		alignSelf: 'center',
		marginBottom: 20,
	},
	input: {
		color: 'rgba(255, 255, 255, 0.7)',
	},
});
