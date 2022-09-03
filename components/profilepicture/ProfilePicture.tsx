import React from 'react'
import { Image } from 'react-native'


export type ProfilePictureProps = {
    image: string,
    size?: number,
}
export const ProfilePicture= ({image, size = 40}: ProfilePictureProps) => {
  return (
    <Image source={{uri: image}}
        style={{width: size, height: size, borderRadius: 50}}
        resizeMode='cover'
    />
  )
}
