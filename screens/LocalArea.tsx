import React, {useState, useEffect} from 'react'
import { ProfilePicture } from '../components/profilepicture/ProfilePicture';
import * as ImagePicker from 'expo-image-picker';
import {FlatList ,StyleSheet, Text, View , TouchableOpacity, Image, Platform, TouchableWithoutFeedback} from 'react-native';
import { AreasChatRoom } from '../components/message/AreasChatRoom';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Input from '../components/roomInput/Index';
import chatRoomData from '../data/Chats';
import axios from 'axios';
import { Loader } from '../components/customLoader/Loader';

export const LocalArea = (props) => {
    const [image, setImage] = useState(null);
    const [messages, setMessages] = useState();
    const [msg, setMsg ] = useState('');
    const { id, town } = props.route.params;
    
    useEffect(() => {
        // go get messages for this community using ID
        (async () => {
            const results = await axios.get(`https://unity-coms.herokuapp.com/api/community/${id}`);
            setMessages(results.data.data)    
        })();
    }, [messages]);
    
  return (
        <View style={styles.container} >
            <FlatList data={messages}
            renderItem={({ item }) => <AreasChatRoom message={item} />}
            />
            <Input style={styles.bottom__container} id={id} town={town} />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 5
    },
    bottom__container: {
        position: "absolute",
        bottom: 0,
    },
    header: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 5,
        // borderRadius: 15,
    },
    header__title: {        
        fontWeight: 'bold',
        fontSize: 12,
        color: "#49274b"
    },
    header__subtitle: {
        color: "#367f86",
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: 30,
        padding: 5,
        backgroundColor: 'white'
    },
    header__status: {
        fontSize: 14,
        color: "black"
    },
    local__town__rankings: {
        position: "absolute",
        top: 10,
        right: 15,
        backgroundColor: '#352d3e',
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 50
    }
})