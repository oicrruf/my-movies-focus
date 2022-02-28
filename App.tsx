import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {ThemeProvider} from 'react-native-elements';
import {HomeScreen, LoginScreen, SplashScreen} from './src/navigation';
import {getData} from './src/utils';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
	const [loading, setLoading] = useState(true);
	const [startComponent, setStartComponent] = useState<FC>();

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
		<ThemeProvider>
			<NavigationContainer>
				{loading ? <SplashScreen /> : startComponent}
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default App;
