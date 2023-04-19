# React Native Typewriter

React-Native component of Animated Text with typewriter effect.

<p align="center"><img src="https://github.com/suchoX/react-native-type-writer/blob/main/assets/demo.gif"></p>

# Installation

```bash
yarn add react-native-type-writer
```

OR

```bash
npm install --save react-native-type-writer
```

# Usage

Add the `Typewriter` component to your app

```javascript
import React from 'react'
import { StyleSheet, View } from 'react-native'
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
    </View>
  )
}
```

# Documentation

The Typewriter has the following props

## text (Mandatory)

type: `Array of Strings`

The Typerwriter component will animate each string one by one. If there's only one string, just pass a single string as a single item of the array

## loop

type: `boolean` default: `false`

After all the strings have been types out, the Text will start looping from the beginning if loop=true. Else, the string will be left visible

## speed

type: `number` default: `300`

The speed of the typing animation. Lower value is higher speed

## delay

type: `number` default: `40`

Delay between two strings in the text array

## textStyle

type: `TextStyle`

Style of the Text being typed

## cursorStyle

type: `TextStyle`

Style of the blinking cursor

## License

Released under the MIT license. See [LICENSE](https://github.com/suchoX/react-native-type-writer/blob/main/LICENSE) for details
