import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {getData} from '../../utils';
import config from '../../config/enviroment.json';

interface Props {
	navigation: any;
}

const storeData = async (value: string) => {
	try {
		let jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem('@storage_token', jsonValue);
	} catch (error) {
		console.log(error);
	}
};

const singIn = async (values: object) => {
	let {login} = config.server;
	try {
		let response = await axios.post(login, values);
		let data = response.data;
		storeData(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const Login: React.FC<Props> = props => {
	const {navigation} = props;
	const [values, setValues] = useState({});
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	useEffect(() => {
		getData('@storage_token').then(token => {
			token !== null && setIsAuthenticate(true);
		});
	}, [navigation]);

	useEffect(() => {
		isAuthenticate && navigation.navigate('HomeScreen');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticate]);

	return (
		<View style={styles.container}>
			<Input
				autoCompleteType
				placeholder="Email"
				leftIcon={{type: 'font-awesome', name: 'user'}}
				onChangeText={value => setValues({...values, email: value})}
			/>
			<Input
				autoCompleteType
				secureTextEntry={true}
				placeholder="Password"
				leftIcon={{type: 'font-awesome', name: 'lock'}}
				onChangeText={value => setValues({...values, password: value})}
			/>
			<Button
				title="Sign In"
				buttonStyle={styles.button}
				containerStyle={styles.containerButton}
				titleStyle={styles.titleButton}
				onPress={() => {
					singIn(values);
				}}
			/>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	button: {backgroundColor: 'rgba(39, 39, 39, 1)'},
	containerButton: {
		marginHorizontal: 8,
	},
	titleButton: {color: 'white', marginHorizontal: 20},
});
