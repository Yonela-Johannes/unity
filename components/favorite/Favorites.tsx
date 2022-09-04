import React from 'react'
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import feed from '../../data/feed'
import { FavoriteList } from './FavoriteList';
import { AntDesign, Feather } from '@expo/vector-icons';

export type MainPops = {
    post: string,
}

export const Favorites = (props: MainPops) => {

  return (
      <View style={styles.container}>            
            <FlatList 
                data={feed}
                renderItem={({ item }) => 
                <FavoriteList name={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                />
                <TouchableOpacity>
                    <View style={styles.addIcon}>
                       <Feather name="edit" size={22} color="#ECB22E" />
                    </View>
                </TouchableOpacity>
        </View> 
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        minHeight: '100%',
        background: 'red'
    },
  addIcon: {
    color: '#ECB22E',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 80,
    marginRight: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#367f86'
  }
})