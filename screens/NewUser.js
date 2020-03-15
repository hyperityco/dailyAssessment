import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import CustomInput from '../components/CustomInput'

const NewUser = ({ navigation }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    trainer: '',
    email: '',
    password1: '',
    password2: '',
  })
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <CustomInput onChangeText={text => setNewUser()} placeholder="" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  container: {
    flex: 1,
    padding: 30,
  },
})

export default NewUser
