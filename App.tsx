import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {LoginScreen, SplashScreen} from './src/navigation';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<NavigationContainer>
			{loading ? <SplashScreen /> : <LoginScreen />}
		</NavigationContainer>
	);
};

export default App;
