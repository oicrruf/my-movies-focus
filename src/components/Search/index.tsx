import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

type SearchBarComponentProps = {};

const Search: React.FC<SearchBarComponentProps> = () => {
	const [search, setSearch] = useState('');

	const updateSearch = search => {
		setSearch(search);
	};

	useEffect(() => {
		console.log(search);
	}, [search]);

	return (
		<View style={{backgroundColor: '#000', flex: 1}}>
			<SearchBar
				placeholder="Type Here..."
				onChangeText={updateSearch}
				value={search}
				containerStyle={{height: 55, backgroundColor: '#393e42'}}
				inputContainerStyle={{backgroundColor: '#393e42', height: 35}}
			/>
		</View>
	);
};

export default Search;
