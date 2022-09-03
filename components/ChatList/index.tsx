import React, {useState, useEffect} from 'react'
import styles from './style';
import  Users from '../../data/Users'
import  User from '../../data/User'
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback, 
    ActivityIndicator} from 'react-native';
import { ChatRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';


export type ChatListItemProps = {
    chatRoom : ChatRoom;
}
const ChatList = ({ chatRoom }) => {
    const [users, setUsers] = useState<Users[]>([]);
    const [user, setUser] = useState<User|null>(null);

    const navigation = useNavigation();

    const onPress = () => {
        console.warn("pressed on", user.name)
        navigation.navigate('Room', {
        id: chatRoom.id,
        })
    }    

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri: user?.imageUri}} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user?.name}</Text>
                    <Text numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={styles.lastMessage}>{chatRoom?.lastMessage?.content}
                    </Text>
                </View>
            </View>
            <Text style={styles.time}>{chatRoom?.lastMessage?.createdAt}</Text>
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default ChatList;