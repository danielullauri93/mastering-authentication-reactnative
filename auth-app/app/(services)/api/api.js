import axios from 'axios'

// Login
export const loginUser = async ({ email, password }) => {
	const response = await axios.post(
		'https://plain-suits-punch.loca.lt/api/users/login',
		{ email, password } // Aquí corregimos el formato
	)

	return response.data // Devuelve los datos del usuario si todo sale bien
}

// Register
export const registerUser = async ({ email, password }) => {
	const response = await axios.post(
		'https://plain-suits-punch.loca.lt/api/users/register',
		{ email, password }
	)
	return response.data
}
