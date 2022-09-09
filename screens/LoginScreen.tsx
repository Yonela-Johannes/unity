import React, { useState, useEffect } from 'react'
import { View, Text, Platform } from 'react-native'
import { Input } from 'react-native-elements';
import styles from './styles'
import { KeyboardAvoidingView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { CustomButton } from '../components/customButton/CustomButton';
import { AntDesign} from '@expo/vector-icons';
import { CustomLink } from '../components/customLink/CustomLink';
import { Loader } from '../components/customLoader/Loader'
function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true)
        setMsg('')
        const user =  {
            userEmail: email.trim().toLowerCase(),
            passWord: password
        }
        const results = await axios.post("https://unity-coms.herokuapp.com/api/login", user)
        setMsg(results.data.data)
        if(results.data.data == 'User logged in successfully!'){
            setLoading(false)
            navigation.navigate("navigator", {
                email
            })
        }
        setLoading(false)
    }
    return (
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <StatusBar style="light" />
            {loading && <Loader />}
            <View style={styles.input__container}>
            <Text style={styles.subheader__text}>Share news with everyone</Text>
            <View style={styles.input_subcontainer}>
                <AntDesign name="user" size={26} color="grey" />
                <Input
                    placeholder="Your Email"
                 type={email} value={email}
                    onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={styles.input_subcontainer}>
                <AntDesign name="lock1" size={26} color="grey" style={styles.icon}/>                
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password" value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            </View>
            <CustomButton text='Sign in' onPress={signIn} type='primary' color='primary' />
            <View style={styles.bottom_container}>
                <Text style={styles.text}>Don't have an account?</Text>
                <CustomLink text='Sign up' onPress={() => navigation.navigate("Signup")} type='secondary' color='secondary' />
            </View>
            <View style={{ height: 10 }}></View>
            <Text style={styles.msg}>{msg}</Text>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
