import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Colors from '../constants/Colors'
import styled from 'styled-components'

const StyledButton = styled(TouchableOpacity)`
  width: 100%;
  height: 55px;
  background-color: ${Colors.buttonColor};
  border-radius: 90px;
  display: flex;
  justify-content: center;
`

const StyledText = styled(Text)`
  color: ${Colors.buttonText};
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`

const FullWidthButton = props => {
  return (
    <StyledButton onPress={props.onPress}>
      <StyledText>{props.title}</StyledText>
    </StyledButton>
  )
}

export default FullWidthButton
