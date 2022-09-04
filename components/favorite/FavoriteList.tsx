import React from 'react'
import styles from './style';
import { AreaRoom } from "../../types";
import { Text, View, TouchableWithoutFeedback, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign} from '@expo/vector-icons';
import { ProfilePicture } from '../profilepicture/ProfilePicture'
import moment from 'moment'

export type FeedListProps = {
    name : AreaRoom;
}
export const FavoriteList = (props: FeedListProps) => {
    const { name } = props;
    const navigation = useNavigation();    
    const onClick = () => { 
        // Navigate to chat room with this townroom 
        navigation.navigate('LocalArea', {
            id: name.id,
            name: name.name,
            })
        }    
  return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
                <ProfilePicture image={name?.user?.imageUri} />
            <View style={styles.leftContainer}>
                <View style={styles.townsContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name?.user?.username}</Text>
                    </View>
                </View>
            </View>
                <AntDesign name="star" size={24} color="black" />
        </View> 
    </TouchableWithoutFeedback>
  )
}
