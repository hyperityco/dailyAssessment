import React, { useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import FullWidthButton from '../components/FullWidthButton'
import CustomInput from '../components/CustomInput'
import HyperityLogo from '../assets/images/brandmark-designblacktext.png'
import Colors from '../constants/Colors'

const Login = () => {
  const [credentials, setCredentials] = useState({})

  const handleSubmit = () => {
    // @TODO: submit credentials to auth service. on return of successful login: pull user data & navigate to different screen
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={HyperityLogo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <View>
          <View style={styles.input}>
            <CustomInput
              onChangeText={text =>
                setCredentials({ ...credentials, email: text })
              }
              placeholder="Email"
              textContentType="emailAddress"
              secureTextEntry={false}
            />
          </View>
          <View style={styles.input}>
            <CustomInput
              onChangeText={text =>
                setCredentials({ ...credentials, password: text })
              }
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.submitButtom}>
          <FullWidthButton title="Login" onPress={handleSubmit} />
          <Text style={styles.text}>New to Hyperity? Click here</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: Colors.standardBackground,
  },
  logoContainer: {
    marginTop: 70,
    marginBottom: 70,
    alignSelf: 'center',
  },
  input: {
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  submitButtom: {
    marginBottom: 40,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
})
