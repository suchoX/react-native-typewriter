import { TextStyle, ViewStyle } from 'react-native'

export interface TypewriterProps {
  textArray: string[]
  speed?: number
  loop?: boolean
  delay?: number
  textStyle?: TextStyle
  cursorStyle?: TextStyle
}
