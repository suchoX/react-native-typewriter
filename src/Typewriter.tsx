import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import { TypewriterProps } from './types'

const DEFAULT_SPEED = 300
const DEFAULT_DELAY = 40
const WHITE = '#ffffff'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: WHITE,
    fontSize: 18,
  },
  cursor: {
    color: WHITE,
    fontSize: 18,
  },
})
const TypeWriter: React.FC<TypewriterProps> = ({
  textArray,
  speed = DEFAULT_SPEED,
  loop = false,
  delay = DEFAULT_DELAY,
  textStyle,
  cursorStyle,
}) => {
  const [stringIndex, setStringIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const opacityValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 2,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 2,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ])
    ).start()
  }, [opacityValue])

  useEffect(() => {
    setTimeout(() => {
      if (textIndex < textArray[stringIndex].length) {
        setTextIndex(textIndex + 1)
      } else {
        if (stringIndex < textArray.length - 1) {
          setTimeout(() => {
            setTextIndex(0)
            setStringIndex(stringIndex + 1)
          }, delay)
        } else {
          if (loop) {
            setTimeout(() => {
              setTextIndex(0)
              setStringIndex(0)
            }, delay)
          }
        }
      }
    }, speed)
  })

  return (
    <View style={styles.container}>
      <Text style={textStyle ? textStyle : styles.text}>
        {textArray[stringIndex].substring(0, textIndex)}
      </Text>
      <Animated.View style={{ opacity: opacityValue }}>
        <Text style={cursorStyle ? cursorStyle : styles.cursor}>▎</Text>
      </Animated.View>
    </View>
  )
}

export default TypeWriter
