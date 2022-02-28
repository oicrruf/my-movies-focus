import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../config/enviroment.json';

export const getPopularMovies = async () => {
	try {
		let response = await axios.get(
			`${config.server.movies}/3/movie/popular?api_key=${config.api_key}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getRelatedMovies = async (id: number) => {
	try {
		let response = await axios.get(
			`${config.server.movies}/3/movie/${id}/similar?api_key=${config.api_key}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getUpcomingMovies = async () => {
	try {
		let response = await axios.get(
			`${config.server.movies}/3/movie/upcoming?api_key=${config.api_key}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getSearchingMovies = async (name: string) => {
	try {
		let response = await axios.get(
			`${config.server.movies}/3/search/multi?api_key=${config.api_key}&query=${name}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getMovieInfo = async (id: number) => {
	try {
		let response = await axios.get(
			`${config.server.movies}/3/movie/${id}?api_key=${config.api_key}`,
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const storeData = async (value: string) => {
	try {
		let jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem('@storage_token', jsonValue);
	} catch (error) {
		console.log(error);
	}
};

export const singIn = async (values: object) => {
	let {login} = config.server;

	try {
		let response = await axios.post(login, values);
		let data = response.data;
		if (values.password !== config.password) {
			return new Error('Invalid user or password');
		} else {
			storeData(data);
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const singOut = async () => {
	try {
		await AsyncStorage.removeItem('@storage_token');
		return await AsyncStorage.getItem('@storage_token');
	} catch (error) {
		console.log(error);
	}
};

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			console.log(value);
			return value;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};
