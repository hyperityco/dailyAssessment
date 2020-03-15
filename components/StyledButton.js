import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const StyledButton = props => {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: props.buttonColor,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: props.textColor,
          fontWeight: 'bold',
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default StyledButton
