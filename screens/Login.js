import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import StyledButton from '../components/StyledButton'
import CustomInput from '../components/CustomInput'
import Colors from '../constants/Colors'
import loginBackground from '../assets/images/loginBackground.png'
import logoWhite from '../assets/images/logoWhite.png'

const Login = ({ navigation }) => {
  const [credentials, setCredentials] = useState({})

  const handleSubmit = () => {
    // @TODO: submit credentials to auth service. on return of successful login: pull user data & navigate to different screen
  }

  const newUserScreen = () => {
    navigation.navigate('NewUser')
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={loginBackground}>
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={logoWhite} style={styles.logo} />
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
              <StyledButton
                title="Login"
                onPress={handleSubmit}
                buttonColor={Colors.buttonColorBlue}
                textColor={Colors.buttonTextWhite}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                New to Hyperity?
                <Text style={styles.newUserLink} onPress={newUserScreen}>
                  {' '}
                  Click here
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.standardBackground,
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  input: {
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  submitButtom: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContainer: {
    marginBottom: 25,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
  newUserLink: {
    color: Colors.linkTextBlue,
  },
})
