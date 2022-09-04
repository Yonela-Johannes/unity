import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ChatMessage } from '../components/message/index';
import Input from '../components/input/Index';
import chatRoomData from '../data/Chats';

export const LocalArea = (props) => {

    console.log('Properties',props.route.params)
    // const { name } = props.route.params
    // console.log(name)
  return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                </View>
            </View>
            <FlatList data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <Input  style={styles.bottom__container} />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 5
    },
    bottom__container: {
        position: "absolute",
        bottom: 0,
    },
    header: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        // borderRadius: 15,
    },
    header__title: {        
        fontWeight: 'bold',
        fontSize: 12,
        color: "#49274b"
    },
    header__subtitle: {
        color: "#367f86",
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: 30,
        padding: 5,
        backgroundColor: 'white'
    },
    header__status: {
        fontSize: 14,
        color: "black"
    },
    local__town__rankings: {
        position: "absolute",
        top: 10,
        right: 15,
        backgroundColor: '#352d3e',
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 50
    }
})