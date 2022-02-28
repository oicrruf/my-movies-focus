import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';

const Splash: FC = () => {
	return (
		<View style={styles.box}>
			<LottieView
				style={styles.animation}
				source={require('../../../assets/splash.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

export default Splash;
