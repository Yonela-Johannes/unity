import React from 'react'
import styles from './style';
import { AreaRoom } from "../../types";
import { Text, View, TouchableWithoutFeedback, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfilePicture } from '../../profilepicture/ProfilePicture'
import moment from 'moment'

export type FeedListProps = {
    name : AreaRoom;
}
export const FeedList = (props: FeedListProps) => {
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
            <View style={styles.leftContainer}>
                <ProfilePicture image={name?.user?.imageUri} />
                <View style={styles.townsContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name?.user?.username}</Text>
                    </View>
                    <Text style={styles.bio}>{name?.content}</Text>
                </View>
                <View>
                    <Image style={styles.thumbnail} source={{uri: name?.imageUri}} />
                </View>
            </View>
            <View>
                <Text>{moment(name?.createdAt).fromNow()}</Text>
            </View>
        </View> 
    </TouchableWithoutFeedback>
  )
}
