import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Pressable, Platform, Text} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Audio, AVPlaybackStatus } from 'expo-av'

const Input = () => {
    const [soundUri, setSoundUri] = useState("")
    const [sound, setSound] = useState<Audio.Sound | null>(null)
    const [image, setImage] = useState(null);
    const [ message, setMessage ] = useState();
    const [msg, setMsg ] = useState('')
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [paused, setPaused] = useState(true)
    const [audioProgress, setAudioProgress] = useState(0)
    const [audioDuration, setAudioDuration] = useState(0)
    
    const onPress = async () => {
        if(!message){
            setMsg('Enter message!')
        } else if(message){
          const msgBody = {
            text: message,
          }
          const results = await axios.post("https://unity-coms.herokuapp.com/api/emergency", msgBody)
          setMsg(results.data.data)
          setMessage('')
        }
    }

    // audio

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
                    </View>
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
        </KeyboardAvoidingView>
    );
}

export default Input;