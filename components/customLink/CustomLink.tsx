import { Text, View, StyleSheet, Pressable } from 'react-native'

export const CustomLink = ({onPress, text, type, color}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${color}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
  },
  container_primary:{
    color: 'white',
    backgroundColor: '#367f86',
  },
    container_secondary:{
        borderColor: '#367f86',
    },
    text_primary: {
        color: 'white',
    },
    text_secondary: {
      fontWeight: 'bold',
        color: '#367f86',
  },
})