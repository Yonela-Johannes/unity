import React from 'react'
import { View } from 'react-native'
import { ProfilePicture } from '../../profilepicture/ProfilePicture'

export type LeftPops = {
    post: string,
}

export const Left = (props: LeftPops) => {

  return (
    <View>
        <ProfilePicture image={"https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?k=20&m=1347431090&s=612x612&w=0&h=dR9y9JGuhbmxgVFof1kC-phxJFyzGGftasI3JUbtk0Q="}/>
    </View>
  )
}
