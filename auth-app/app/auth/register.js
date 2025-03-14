import { Formik } from 'formik'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native'
import * as Yup from 'yup'

const validationShema = Yup.object().shape({
  email: Yup.string().email().required('Email is required').label('Email'),
  password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required')
		.label('Password'),
  confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Password must match')
		.required('Required')
})
const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {/* Formik configuration */}
      <Formik
        initialValues={{ email: '', password: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationShema}
			>
        {({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					touched,
					errors
				}) =>
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
    {/* Error */}
    {touched.email &&
							errors.email &&
							<Text style={styles.errorText}>
  {errors.email}
							</Text>}
    {/* Password */}
    <TextInput
      style={styles.input}
      placeholder='Password'
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      secureTextEntry
						/>
    {/* Confirm Password */}
    <TextInput
      style={styles.input}
      placeholder='Confirm Password'
      onChangeText={handleChange('confirmPassword')}
      onBlur={handleBlur('confirmPassword')}
      value={values.confirmPasswordassword}
      secureTextEntry
						/>
    {/* Error */}
    {touched.confirmPassword &&
							errors.confirmPassword &&
							<Text style={styles.errorText}>
  {errors.confirmPassword}
							</Text>}
    {/* Login */}
    <TouchableOpacity onPress={handleSubmit}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </View>
    </TouchableOpacity>
  </View>}
      </Formik>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  form: {
    width: '100%'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    marginBottom: 16
  },
  button: {
    height: 50,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
