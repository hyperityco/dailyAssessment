import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const CustomInput = props => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      style={styles.input}
      textContentType={props.textContentType}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 55,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})
