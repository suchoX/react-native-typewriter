import { ViewStyle } from 'react-native'

export interface TypewriterProps {
  text: string[]
  speed?: number
  loop?: boolean
  delay?: number
  textStyle?: ViewStyle
  cursorStyle?: ViewStyle
}
