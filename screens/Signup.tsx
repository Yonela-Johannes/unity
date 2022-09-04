import React, { useState} from 'react';
import { Text, Input} from 'react-native-elements';
import { Button, KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


function Signup() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState('');

    const signUp = async ({ navigation }) => {
        const user =  {
            firstName: name,
            lastName,
            userEmail: email,
            passWord: password
        }
        console.log("User object"+user)
        const results = await axios.post("https://unity-coms.herokuapp.com/api/register", user)
        console.log(results.data)
        setMsg(results.data.data)
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
                    placeholder="lastname"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
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
                    <Button onPress={() => navigation.navigate("Signin")} containerStyle={styles.button} type="outline" title="Signin" />
            </KeyboardAvoidingView>
            <Text>{msg}</Text>
        </View>
    )
}

export default Signup
