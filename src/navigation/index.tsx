import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Login';
import Splash from '../components/Splash';
import Home from '../components/Home';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
	headerShown: false,
};

export const SplashScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};

export const LoginScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="Splash" component={Splash} />
		</Stack.Navigator>
	);
};

export const HomeScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Home',
					headerTintColor: '#fff',
					headerTransparent: true,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};
