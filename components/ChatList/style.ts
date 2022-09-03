import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        overflow: 'hidden',
    },
    midContainer: {
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#49274b',
    },
    lastMessage: {
        fontSize: 13,
        color: 'grey',
        flexWrap: 'wrap',
    },
    time: {
        fontSize: 11,
        color: 'grey',
    },
    badge__container: {
        backgroundColor: '#41748d',
        position: 'absolute',
        left: 30,
        borderRadius: 50,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge__text: {
        color: 'white',
        fontSize: 9
    }
});

export default styles;