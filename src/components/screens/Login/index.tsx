import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';
import {getData, singIn} from '../../../utils';
import styles from './styles';

interface Props {
	navigation: any;
}

const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(17, 'You password is short!')
		.max(17, 'You password is large!')
		.required('Password is required'),
});

const Login: React.FC<Props> = props => {
	const {navigation} = props;
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	useEffect(() => {
		isAuthenticate && navigation.navigate('Home');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticate]);
	return (
		<Formik
			initialValues={{email: '', password: ''}}
			validationSchema={SignupSchema}
			onSubmit={values => {
				singIn(values).then(() => {
					getData('@storage_token').then(token => {
						token !== undefined && setIsAuthenticate(true);
					});
				});
			}}>
			{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
				<View style={styles.container}>
					<Image
						source={require('../../../assets/logo.png')}
						style={styles.logo}
					/>
					<Input
						autoCompleteType
						placeholder="Email"
						leftIcon={{type: 'font-awesome', name: 'user'}}
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						errorMessage={errors.email && touched.email ? errors.email : ''}
						style={styles.input}
					/>
					<Input
						autoCompleteType
						secureTextEntry={true}
						placeholder="Password"
						leftIcon={{type: 'font-awesome', name: 'lock'}}
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						value={values.password}
						errorMessage={
							errors.password && touched.password ? errors.password : ''
						}
						style={styles.input}
					/>
					<Button
						title="Sign In"
						buttonStyle={styles.button}
						containerStyle={styles.containerButton}
						titleStyle={styles.titleButton}
						onPress={handleSubmit}
					/>
				</View>
			)}
		</Formik>
	);
};

export default Login;
