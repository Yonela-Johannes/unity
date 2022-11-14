import React, { useState} from 'react';
import { Text, Input} from 'react-native-elements';
import { Platform, KeyboardAvoidingView, View } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/customButton/CustomButton';
import { CustomLink } from '../components/customLink/CustomLink';
import { AntDesign, MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';

function Signup() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState('');

    const signUp = async ({ navigation }) => {
        const user =  {
            firstName: name,
            lastName,
            userEmail: email.trim().toLowerCase(),
            passWord: password
        }
        const results = await axios.post("https://unity-coms.herokuapp.com/api/register", user)
        setMsg(results.data.data)
    };
    return (
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.signup__container} >
                 <StatusBar style="light" />
                    <Text style={styles.msg}>{msg}</Text>
                 <Text style={styles.subheader__text}>Share news with everyone</Text>
                <View style={styles.signup__input__container}>
                    <View style={styles.input_subcontainer}>
                        <FontAwesome name="user-o" size={26} color="grey" />
                        <Input
                        placeholder="name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={styles.input_subcontainer}>
                        <FontAwesome name="user-o" size={26} color="grey" />
                        <Input
                        placeholder="last name"
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        />
                    </View>
                    <View style={styles.input_subcontainer}>
                        <MaterialCommunityIcons name="email-edit-outline" size={26} color="grey" />
                        <Input
                        placeholder="Email" type='email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.input_subcontainer}>
                        <AntDesign name="lock1" size={26} color="grey" style={styles.icon}/>                
                        <Input
                        placeholder="Password" type='password'
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                </View>
                    <CustomButton opacity={.9} text='Sign up' onPress={signUp} type='primary' color='primary' />
                    <View style={styles.bottom_container}>
                        <Text style={styles.text}>Do you have an account?</Text>
                        <CustomLink text='Sign in' onPress={() => navigation.navigate("Signin")} type='secondary' color='secondary' />
                    </View>
            </KeyboardAvoidingView>
    )
}

export default Signup
