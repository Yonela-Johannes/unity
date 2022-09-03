import React, { useState, useLayoutEffect } from 'react';
import { Text, Input} from 'react-native-elements';
import { Button, KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

function Signup() {
    const [name, setName] = useState();
    const [chatName, setChatName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    useLayoutEffect(() => {

    },);
    const signUp = () => {

    };
    return (
        <View style={{width:'100%', height: '100%'}}>
            <KeyboardAvoidingView behavior="padding" style={styles.signup__container} >
                 <StatusBar style="light" />       
                 <Text style={styles.header__text}>
                    Welcome to Communities
                </Text>
                <View style={styles.signup__input__container}>
                    <Input
                    placeholder="name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    />
                    <Input
                    placeholder="Email" type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                    placeholder="Password" type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button containerStyle={styles.button}
                raised 
                onPress={signUp} 
                title="Sign up" />
            </KeyboardAvoidingView>
        </View>
    )
}

export default Signup
