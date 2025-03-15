import { useRef } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
const Home = () => {
	const video = useRef(null)
	const router = useRouter()
	return (
		<View style={styles.container}>
			{/* Video player */}
			<Video
				ref={video}
				style={styles.video}
				source={{
					uri: 'https://cdn.pixabay.com/video/2023/11/24/190558-888122702_large.mp4',
				}}
				resizeMode={ResizeMode.COVER}
				shouldPlay
				isLooping
			/>

			{/* Text */}
			<View styles={styles.overlay}>
				<Text style={styles.mainText}>Daniel Ullauri</Text>
				<Text style={styles.subText}>Welcome to my app</Text>
				<Text style={styles.subText}>Build App, Build Futures </Text>
			</View>

			{/* Buttons */}
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => router.push('/auth/login')}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => router.push('/auth/register')}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	video: {
		...StyleSheet.absoluteFillObject,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	mainText: {
		color: 'white',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subText: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	tagline: {
		color: 'white',
		fontSize: 18,
		fontStyle: 'italic',
		textAlign: 'center',
		marginTop: 10,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: 30,
		left: 0,
		right: 0,
	},
	button: {
		backgroundColor: '#6200ea',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 25,
		elevation: 3, // Adds a shadow effect on Android
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
})
