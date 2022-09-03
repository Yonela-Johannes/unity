import React from 'react';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import { FlatList, View, StyleSheet} from 'react-native';
import {ChatMessage} from '../components/message';
import Input from '../components/input/Index';

export const EmergencyScreen = ()=> {
    return (
        <View style={styles.container} >
            <FlatList data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <Input/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})