import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	searchBarContainerStyle: {height: 55, backgroundColor: '#000'},
	searchBarInputContainerStyle: {backgroundColor: '#393e42', height: 35},
	MainContainer: {
		flex: 1,
		backgroundColor: 'white',
	},

	item: {
		paddingLeft: 15,
		paddingTop: 8,
		paddingBottom: 8,
	},

	ListHeaderComponentStyle: {
		borderBottomColor: '#000',
		borderBottomWidth: 0,
	},
	topSearch: {
		color: '#fff',
		marginHorizontal: 10,
		marginBottom: 10,
		fontWeight: '900',
		fontSize: 20,
	},

	headerRight: {flexDirection: 'row'},
});
