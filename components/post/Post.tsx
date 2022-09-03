import React from 'react'
import { View } from 'react-native'
import { Left } from './left/Left'
import { Main } from './main/Main'

export type PostPops = {
    post: string,
}

export const Post = (props: PostPops) => {

  return (
    <View>
    {/* Left Container */}
    {/* <Left /> */}
    {/* Main Container */}
    <Main />
    </View>
  )
}
