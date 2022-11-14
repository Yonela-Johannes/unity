import { Post } from '../components/post/Post';
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function Chat({ navigation }) {
    const [ position, setPosition ] = useState()

    useEffect(() => {

    },)
    
    return (
        <View style={styles.container}>
            <MapView
                initialRegion = {{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            
            style={styles.map} />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})