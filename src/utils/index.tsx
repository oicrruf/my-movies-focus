import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../config/enviroment.json';

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			console.log(value);
			return value;
		}
	} catch (error) {
		console.log(error);
	}
	return false;
};

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
