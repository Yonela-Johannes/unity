import React from 'react'
import { MotiView } from '@motify/components'
import { View } from 'react-native'

const LoadingIndicator = ({size}:{size: number}) => {
  return(
    <MotiView
    from={{
      width: size,
      height: size,
      borderRadius: size
    }}
    animate={{
      width: size + 60,
      height: size + 60,
      borderRadius: size + 60
    }}
    transition={{
      type: 'timing',
      loop: true
    }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 3,
        borderColor: 'grey',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  )
}

export const Loader = () => {
  return (
    <View style={{
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f8f8f85e',
      justifyContent: 'center',
      width: "100%",
      height: "100%",
      zIndex: 3
    }}>
      <LoadingIndicator size={25} />
    </View>
  )
}
