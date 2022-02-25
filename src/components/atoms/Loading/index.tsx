import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
	height: number;
	width: number;
	backgroundColor: string;
}

const Loading: React.FC<Props> = props => {
	const {width, height, backgroundColor} = props;
	return (
		<View style={[styles.box, {width, height, backgroundColor}]}>
			<LottieView
				style={styles.animation}
				source={require('../../../assets/download.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	animation: {
		width: '70%',
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
	},
});

export default Loading;
