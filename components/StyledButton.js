import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const StyledButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    width: 180,
    height: 50,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: Colors.buttonText,
    fontWeight: 'bold',
  },
})

export default StyledButton
