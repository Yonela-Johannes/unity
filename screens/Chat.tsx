import {View} from 'react-native'
import {StyleSheet} from 'react-native';
import { Post } from '../components/post/Post';


function Chat({ navigation }) {
    return (
        <View style={styles.container}>
            <Post />
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
})