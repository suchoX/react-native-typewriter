import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TypeWriter from 'react-native-type-writer'

const BACKGROUND = '#263238'
const WHITE = '#ffffff'
const PINK = '#c2185b'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: BACKGROUND,
    justifyContent: 'center',
  },
  typeWriterText: {
    color: WHITE,
    fontSize: 24,
  },
  typeWriterCursorText: {
    color: PINK,
    fontSize: 24,
  },
})
const App = () => {
  return (
    <View style={styles.container}>
      <TypeWriter
        textArray={['Hello', 'How', 'Are', 'You', 'Doing?']}
        loop
        speed={200}
        delay={500}
        textStyle={styles.typeWriterText}
        cursorStyle={styles.typeWriterCursorText}
      />

      <TypeWriter
        textArray={['Hello, How Are You Doing?']}
        loop
        speed={150}
        delay={500}
        textStyle={styles.typeWriterText}
        cursorStyle={styles.typeWriterCursorText}
      />
    </View>
  )
}

export default App
