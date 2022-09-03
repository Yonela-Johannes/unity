import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import chatRoomData from '../data/Chats';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ChatList from '../components/ChatList/index';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Post } from '../components/post/Post';


function Chat({ navigation }) {
    const route = useRoute();
    const contactLink = () => {
        navigation.navigate('ContactScreen')
    }
    const profile = () => {
        navigation.navigate('ProfileScreen')
    }
    return (
        <View style={styles.container}>
            <Post />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contact__link: {
        position: 'absolute',
        right: 5,
        top: 25,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#352d3e',
    },
    user__profile: {
        position: 'absolute',
        right: 5,
        top: 80,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#352d3e',
    },

})