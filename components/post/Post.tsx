import React from 'react'
import { View } from 'react-native'
import { Main } from './main/Main'
export type PostPops = {
    post: string,
}

export const Post = (props: PostPops) => {

  return (
    <View>
      <Main />
    </View>
  )
}
