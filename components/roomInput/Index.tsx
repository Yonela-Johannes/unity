import React, { useState,useEffect } from "react";
import styles from './styles';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Pressable, Platform, Text} from 'react-native';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import axios from 'axios';


const Input = ({id, town}) => {
    const [ message, setMessage ] = useState('');
    const [msg, setMsg ] = useState('')

    const onPress = async () => {
        if(!message){
            setMsg('Enter message!')
        } else if(message){
          const msgBody = {
            text: message,
          }
          // i need thhe id for this community but i don't knnow how to get it from this page
          const results = await axios.post(`https://unity-coms.herokuapp.com/api/community/${id}`, msgBody)
          setMsg(results.data.data)
          setMessage('')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.root} keyboardVerticalOffset={100}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <TextInput style={styles.textInput}
                    multiline
                    onChangeText={text => setMessage(text)}
                    value={message}
                    placeholder={'Whats Happening?'}
                    />
                    <TouchableOpacity onPress={onPress}>
                            <View style={styles.buttonContainer}>
                                {!message?
                                    <Entypo name="location-pin" size={24} color="white" />
                                    :
                                    <MaterialCommunityIcons name="send-outline" size={24} color="white" /> 
                                }
                            </View>
                    </TouchableOpacity>                   
                    </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Input;