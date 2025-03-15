import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native'
import * as Yup from 'yup'
import { loginUser } from '../(services)/api/api'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../(redux)/authSlice'

// Definimos el esquema de validación
const validationSchema = Yup.object().shape({
	email: Yup.string().email().required('Email is required').label('Email'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required')
		.label('Password'),
})

const Login = () => {
	const mutation = useMutation({
		mutationFn: loginUser,
		mutationKey: ['login'],
	})

	// dispatch
	const dispatch = useDispatch()

	useSelector((state) => console.log('Store data', state))

	// router
	const router = useRouter()
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>

			{/* Mensajes de éxito o error */}
			{mutation.isError && (
				<Text style={styles.errorText}>
					{mutation.error?.response?.data?.message || 'Error al iniciar sesión'}
				</Text>
			)}
			{mutation.isSuccess && (
				<Text style={styles.successText}>Logged in successful</Text>
			)}

			{/* Formik configuration */}
			<Formik
				initialValues={{ email: 'daniel@gmail.com', password: '12345678' }}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					mutation
						.mutateAsync(values)
						.then((data) => {
							// dispatch
							dispatch(loginUserAction(data))
							router.push('/(tabs)')
						})
						.catch((error) => {
							console.log(error)
						})
				}}>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					touched,
					errors,
				}) => (
					<View style={styles.form}>
						{/* Email */}
						<TextInput
							style={styles.input}
							placeholder='Email'
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							keyboardType='email-address'
							autoCapitalize='none'
						/>
						{touched.email && errors.email && (
							<Text style={styles.errorText}>{errors.email}</Text>
						)}

						{/* Password */}
						<TextInput
							style={styles.input}
							placeholder='Password'
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							secureTextEntry
						/>
						{touched.password && errors.password && (
							<Text style={styles.errorText}>{errors.password}</Text>
						)}

						{/* Login */}
						<TouchableOpacity
							onPress={handleSubmit}
							style={styles.button}
							disabled={mutation.isPending}>
							{mutation.isPending ? (
								<ActivityIndicator color='#fff' />
							) : (
								<Text style={styles.buttonText}>Login</Text>
							)}
						</TouchableOpacity>
					</View>
				)}
			</Formik>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	form: {
		width: '100%',
	},
	input: {
		height: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 16,
		marginBottom: 16,
		backgroundColor: '#fff',
	},
	errorText: {
		color: 'red',
		marginBottom: 16,
	},
	button: {
		height: 50,
		backgroundColor: '#6200ea',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		marginTop: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	successText: {
		color: 'green',
		marginBottom: 16,
	},
})
