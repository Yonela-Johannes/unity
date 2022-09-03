import React, { useState, useRef } from "react";
import styles from './styles';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';

const Input = () => {
    const [ message, setMessage ] = useState();
    const filePickerRef = useRef(null)
    const [postImage, setPostImage] = useState({
        myFile: "",
    });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };


    const onPress = () => {
        if(!message){
            
        }else{
            
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
                    {!message && <Fontisto name="camera" onPress={() => filePickerRef.current.click()} size={24} color="#fff"  style={styles.icon}/>}

                    <TextInput
                        type="file"
                        label="Image"
                        name="myFile"
                        hidden
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => handleFileUpload(e)} ref={filePickerRef}

                    />
                    </View>
                    <TouchableOpacity onPress={onPress}>
                            <View style={styles.buttonContainer}>
                                {!message ?
                                    <Entypo name="location-pin" size={28} color="white" />
                                    :
                                    <MaterialCommunityIcons name="send-outline" size={28} color="white" /> 
                                }
                            </View>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Input;