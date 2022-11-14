import React, { useState} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import styles from './styles'
import { Input } from 'react-native-elements';
import { KeyboardAvoidingView, Platform  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { CustomButton } from '../components/customButton/CustomButton';
import { Loader } from '../components/customLoader/Loader';

function CreateTowns({ navigation }) {
    const [townName, setTownName] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const createTown = async () => {
        setLoading(true)
        setMsg('')
        if(!townName){
            setMsg('Enter valid town name!')
            setLoading(false)
        }else if(townName.length < 4){
            setMsg('Town must be more than 4 characters')
            setLoading(false)
        }
        else{
                setLoading(true)
            const town =  {
                guildName: townName.trim(),
            }
            const results = await axios.post("https://unity-coms.herokuapp.com/api/community", town)
            setMsg(results.data.data)
            if(results.data.data == 'Guild created successfully!'){
                navigation.navigate("Favorites")
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.favContainer}>
            <View>
                <Text style={styles.header__text}>Create New Town</Text>
                <View style={styles.input__container}>
                    <Input
                        placeholder="Your Town Name"
                        type={'text'} value={townName}
                        onChangeText={(text) => setTownName(text)} />
                </View>
                <Text style={styles.msg}>{msg}</Text>
                {/* <CustomButton onPress={createTown} text='Create Town' type='primary' color="primary" /> */}
            </View>
        </KeyboardAvoidingView>
    )
}

export default CreateTowns

