import React from 'react'
import {View, FlatList,} from 'react-native';
import feed from '../../../data/feed'
import { FeedList } from './FeedList';

export type MainPops = {
    post: string,
}

export const Main = (props: MainPops) => {

  return (
        <View>            
            <FlatList 
                data={feed}
                renderItem={({ item }) => 
                <FeedList name={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </View> 
  )
}
