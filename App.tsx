import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {HomeScreen, LoginScreen, SplashScreen} from './src/navigation';
import {getData} from './src/utils';

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
