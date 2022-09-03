import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';
import styles from './styles'
import { KeyboardAvoidingView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import background__image from '../assets/images/SigmaLogo.png';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }
    return (
        // <ImageBackground style={{ width: '100%', height: '100%' }} source={background__image}>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.header__text}>Connect with everyone</Text>
            {/* <Image style={{ width: 300, height: 200 }} source={require('../assets/images/ReactBackground.png')} /> */}
            <View style={styles.input__container}>

                <Input
                    placeholder="Your Email"
                    autoFocus type={email} value={email}

                    onChangeText={(text) => setEmail(text)} />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password" value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={{ height: 10 }}></View>
            <Button
                //     onPress={signIn}
                onPress={signIn}
                containerStyle={styles.button} buttonStyle={styles.button} title="Sign In"></Button>
            <Button onPress={() => navigation.navigate("SignUp")} containerStyle={styles.button} type="outline" title="Sign Up" />
        </KeyboardAvoidingView>
        // </ImageBackground>
    )
}

export default LoginScreen
