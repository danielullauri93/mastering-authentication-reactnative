import axios from 'axios'

// Create a function to return a Promise

// Login
const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
			'https://flat-clouds-march.loca.lt/api/users/login',
      {
        email,
        password
      }
		)

		// returning a promise
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// Register
const registerUser = async (email, password) => {
  try {
    const response = await axios.post(
			'https://flat-clouds-march.loca.lt/api/users/register',
      {
        email,
        password
      }
		)

		// returning a promise
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { loginUser, registerUser }
