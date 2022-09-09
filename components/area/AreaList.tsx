import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image, Platform, TouchableWithoutFeedback} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';
import { AreaRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';

export type AreaListItemProps = {
    town : AreaRoom;
}
export const AreaList = (props: AreaListItemProps) => {
    const { town } = props;
    const navigation = useNavigation();    
    const onClick = () => { 
        // Navigate to chat room with this townroom 
        navigation.navigate('LocalArea', {
            id: town.community_id,
            town: town.community_name,
            })
        }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.townsContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.town}>{town?.community_name}</Text>
                    </View>
                </View>
            </View>      
        </View> 
    </TouchableWithoutFeedback>
  )
}
