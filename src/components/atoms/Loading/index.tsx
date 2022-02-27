import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
	height: number;
	width: number;
	backgroundColor: string;
}

const Loading: FC<Props> = props => {
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

export default Loading;
