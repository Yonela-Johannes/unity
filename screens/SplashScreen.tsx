import React, {useState, useEffect} from 'react'
import { styles } from './splashscreen'
import logo from '../assets/hookd.png'
import { View, Text, Image } from 'react-native'
import { Loader } from '../components/Loader'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

export const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin')
    },4000)
  },[navigation])
  
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
        <Image source={require('../assets/hookd.png')} style={styles.logo} resizeMode='stretch' />
   <Text style={styles.header__text}>Communities
                </Text>
                 <Text style={styles.subheader__text}>Share news with everyone</Text>
        </View>
        <Loader/>
    </View>
  )
}
