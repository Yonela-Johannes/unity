import React, { useState, useRef, useEffect } from "react";
import styles from './styles';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Pressable, Platform, Text} from 'react-native';
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
    
    useEffect(() => {
        (async () => {
            if(Platform.OS !== "web"){
                const libraryResponse = await ImagePicker.requestMediaLibraryPermissionsAsync()
                const imageResponse = await ImagePicker.requestCameraPermissionsAsync()
                const audioResponse = await Audio.requestPermissionsAsync()
                    if(libraryResponse.status !== 'granted' || imageResponse.status !== 'granted' || audioResponse.status !== 'granted'){
                        alert('We need permission to be able to make this work')
                    }
            }

        })()
    }, [])

     const onPlayBackStatusUpdate = (status: AVPlaybackStatus) => {
        if(!status.isLoaded){
            return;
        }
        setAudioProgress(status.positionMillis / (status.durationMillis || 1));
        setPaused(!status.isPlaying)
        setAudioDuration(status.durationMillis || 0)
    }
    const initialStatus = (data) => {
    }

    const playPauseSound = async () => {
        if(!sound){
            return;
        }
        if(paused){
            await sound?.playFromPositionAsync(0)
        }else{
            await sound?.pauseAsync();
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
                aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    const takeImage = async () => {
        console.log('Pressed!! Button')
        // No permissions request is necessary for launching the camera
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
                aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
        setImage(result.uri);
        } 
    }
    const onPress = async () => {
        if(!message){
            setMsg('Enter message!')
        } else if(message || image || soundUri){
          const msgBody = {
            text: message,
            // image: image
          }
          const results = await axios.post("https://unity-coms.herokuapp.com/api/emergency", msgBody)
          setMsg(results.data.data)
          setMessage('')
        }
    }

    // audio
    const startRecording = async () => {
        try{
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true
            });
            
            console.log('Starting Recording..')
            const { recording } = await Audio.Recording.createAsync(
                // Audio.RecordingOptionsPresets.HIGH_QUALITY
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            //   await recording.startAsync();
            setRecording(recording)
            console.log('Recording Started.')
        }
        catch(err){
            console.log('Failed to start recording!!')
            console.log(err)
        }
    }

    const stopRecording = async () => {
        console.log('Stoping recording!!')
        if(!recording){
            return;
        }
        setRecording(null)
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
                allowsRecordingIOS: false
            });
        const uri = recording.getURI();
        if(!uri){
            return;
        }
        setSoundUri(uri)
        console.log('recording stopped and stored at: ', uri)
        const { sound } = await Audio.Sound.createAsync({uri}, initialStatus, onPlayBackStatusUpdate)
        setSound(sound)
    }

    const getDuration = () => {
        const minutes = Math.floor(audioDuration / (60 * 1000));
        const seconds = Math.floor((audioDuration % ( 60 * 1000)) / 1000);
        return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    }

    // sendImage
    const sendImage = () => {
        if(!image){
            return;
        }

    }
    // sendAudio
    const sendAudio = () => {
        if(!soundUri){
            return;
        }

    }
    return (
        <KeyboardAvoidingView style={styles.root} keyboardVerticalOffset={100}>
             {image && 
            <View style={styles.imageContainer}>
               <Image source={{uri: image}} style={styles.image} resizeMode={'contain'} />
               <TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <AntDesign name='close' size={24}  color="white"  style={styles.icon} onPress={() => setImage(null)}/>
                </View>
               </TouchableOpacity>
            </View>}
            {sound && 
                <View style={styles.audioMainContainer}>
                    <View style={styles.sendAudioContainer}>
                        <TouchableOpacity>
                            <FontAwesome5 name={paused ? 'play' : 'pause'} onPress={playPauseSound} size={25} color="#ECB22E" />
                        </TouchableOpacity>
                        <View style={styles.audioProgressBG}>
                            <View style={[styles.audioProgressFG, { left: `${audioProgress * 100}%`}]}></View>
                        </View>
                            <Text>{getDuration()}</Text>
                    </View>
                        <TouchableOpacity>
                            <View style={styles.buttonContainer}>
                                <AntDesign name='close' size={24}  color="white"  style={styles.icon} onPress={() => setSound(null)}/>
                            </View>
                        </TouchableOpacity>                   
                </View>
            }
            <View style={styles.container}>
                        <TouchableOpacity onPress={onPress}>
                            <View style={recording ? styles.recordingButtonContainer :styles.buttonContainer}>
                                {!message ?
                                <Pressable onPressIn={startRecording} onPressOut={stopRecording}>
                                    <MaterialCommunityIcons name={recording ? "microphone" : 'microphone-outline'} size={24} color={"white"} />
                                </Pressable>
                                    :
                                    <MaterialIcons name="insert-emoticon" size={24} color="white" /> 
                                }
                            </View>
                    </TouchableOpacity>
                <View style={styles.mainContainer}>
                    <TextInput style={styles.textInput}
                    multiline
                    onChangeText={text => setMessage(text)}
                    value={message}
                    placeholder={'Whats Happening?'}
                    />
                    <TouchableOpacity>
                        {!message && <Entypo name="images"  onPress={pickImage} size={26} color="#49274b"  style={styles.icon}/>}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {!message && <Fontisto name="camera"  onPress={takeImage}  size={24} color="#49274b"  style={styles.icon}/>}
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={onPress}>
                            <View style={styles.buttonContainer}>
                                {!message || !image || soundUri ?
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