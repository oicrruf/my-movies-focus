import {
	CardStyleInterpolators,
	createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../components/Login';
import Splash from '../components/Splash';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Search from '../components/Search';

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerShown: false,
};

const screenOptionsStyleHeader = {
	title: '',
	headerTintColor: '#fff',
	headerTransparent: true,
};

const screenOptionsStyleHeaderWhitTransition = {
	title: '',
	headerTransparent: false,
	headerStyle: {
		backgroundColor: '#000',
	},
	headerTintColor: '#fff',
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
				options={screenOptionsStyleHeader}
			/>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="DetailScreen"
				component={Detail}
				options={screenOptionsStyleHeader}
			/>
			<Stack.Screen
				name="SearchScreen"
				component={SearchScreen}
				options={screenOptionsStyleHeaderWhitTransition}
			/>
		</Stack.Navigator>
	);
};

export const DetailScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Detail" component={Detail} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export const SearchScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Search"
				component={Search}
				options={screenOptionsStyleHeaderWhitTransition}
			/>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};
