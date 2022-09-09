import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet} from 'react-native';
import {ChatMessage} from '../components/message';
import Input from '../components/input/Index';
import axios from 'axios';
import { Loader } from '../components/customLoader/Loader';

export const EmergencyScreen = ()=> {
    const [data, setData ] = useState()
    useEffect(() => {
        // emergency messages from the database
        const fetchData = async () => {
            const fetchMessages = await axios.get("https://unity-coms.herokuapp.com/api/emergency")
            setData(fetchMessages.data.data)
        }
        fetchData()
    }, [data])

    return (
        <View style={styles.container} >
            {!data && <Loader />}
            <FlatList data={data}
            renderItem={({ item }) => <ChatMessage message={item} 
            />}
             showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.msg_id}
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