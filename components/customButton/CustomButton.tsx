import { Text, View, StyleSheet, Pressable } from 'react-native'

export const CustomButton = ({onPress, text, type, color}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${color}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  },
  container_primary:{
    color: 'white',
    backgroundColor: '#367f86',
  },
    container_secondary:{
        borderWidth: 1,
        borderColor: '#367f86',
    },
    text_primary: {
        color: 'white',
    },
    text_secondary: {
        color: 'grey',
  },
})