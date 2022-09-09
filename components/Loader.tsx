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
      width: size + 30,
      height: size + 30,
      borderRadius: size + 20
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
        borderColor: '#367f86',
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      height: "100%",
      zIndex: 1
    }}>
      <LoadingIndicator size={10} />
    </View>
  )
}
