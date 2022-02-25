import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {getData} from './src/utils';
import {LoginScreen, SplashScreen, HomeScreen} from './src/navigation';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [startComponent, setStartComponent] = useState();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		getData('@storage_token').then(token => {
			console.log('sd', token);
			return token !== undefined
				? setStartComponent(HomeScreen)
				: setStartComponent(LoginScreen);
		});
	}, []);

	return (
		<NavigationContainer>
			{loading ? <SplashScreen /> : startComponent}
		</NavigationContainer>
	);
};

export default App;
