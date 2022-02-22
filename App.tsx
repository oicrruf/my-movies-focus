/**
 * @format
 */

import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Splash: React.FC = () => {
	return (
		<View style={styles.box}>
			<LottieView
				style={styles.animation}
				source={require('./assets/movie-cut.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

const Login: React.FC = () => {
	return (
		<View>
			<Text>Login</Text>
		</View>
	);
};

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	if (loading) {
		return <Splash />;
	} else {
		return <Login />;
	}
};

export default App;

const styles = StyleSheet.create({
	box: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
	},
	animation: {
		width: '40%',
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
	},
});
