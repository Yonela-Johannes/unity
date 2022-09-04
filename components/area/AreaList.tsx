import React from 'react'
import styles from './style';
import { AreaRoom } from "../../types";
import { Text, View, TouchableWithoutFeedback, Image  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export type AreaListItemProps = {
    name : AreaRoom;
}
export const AreaList = (props: AreaListItemProps) => {
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
                <View style={styles.townsContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name?.name}</Text>
                    </View>
                </View>
                <AntDesign name="staro" size={24} color="black" />
            </View>
        </View> 
    </TouchableWithoutFeedback>
  )
}
