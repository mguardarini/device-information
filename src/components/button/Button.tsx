import React from 'react'
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import styles from './Button.style'
import PropTypes from 'prop-types'

type Props = {
  text: string
  onPress: (event: GestureResponderEvent) => void
  disabled?: boolean
  testID?: string
  opacity:boolean
}

const Button = ({
  text,
  onPress,
  width,
  disabled,
  testID,
  opacity
}: Props) => (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      testID={`button ${testID}`}
      style={[
        styles.button,
        {
          width: width,
        },
        opacity ? styles.opacity : {},

      ]}
    >
      <Text
        testID="label"
        style={ opacity ? styles.textOpacity : styles.text }>
        {text}
      </Text>
    </TouchableOpacity>
  )


Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  testID: PropTypes.string,
  disabled: PropTypes.object,
}

export default Button