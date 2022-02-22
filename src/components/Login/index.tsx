import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

const singIn = async (values: object) => {
	try {
		let response = await axios.post('https://reqres.in/api/login', values);
		let data = response.data;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const Login: React.FC = () => {
	const [values, setValues] = useState({});
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
