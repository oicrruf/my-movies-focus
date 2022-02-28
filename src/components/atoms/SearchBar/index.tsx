import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SearchBar, Text} from 'react-native-elements';
import {getSearchingMovies} from '../../../utils';
import styles from './styles';

interface Props {
	searching: any;
	onChangeText: any;
}

const Header: React.FC<Props> = props => {
	const {searching} = props;
	const [inputSearch, setInputSearch] = useState<string>('');

	useEffect(() => {
		getSearchingMovies(inputSearch)
			.then(m => {
				searching(m.results);
			})
			.catch(e => console.log(e));
	}, [inputSearch, searching]);

	return (
		<View style={styles.container}>
			<SearchBar
				placeholder="Search for a movie"
				onChangeText={setInputSearch}
				onClear={() => {
					setInputSearch('');
				}}
				value={inputSearch}
				containerStyle={styles.searchBarContainerStyle}
				inputContainerStyle={styles.searchBarInputContainerStyle}
			/>
			<Text style={styles.topSearch}>Top Searches</Text>
		</View>
	);
};

export default Header;
