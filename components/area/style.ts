import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 1,
        overflow: 'hidden',
    },

    leftContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "#dedddc",
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    townsContainer: {
        justifyContent: 'center',

    },
    town: {
        fontSize: 18,
        color: '#49274b',

    },
    nameContainer: {
 
    },
    name: {
         fontSize: 16,
        color: '#367f86',
        // marginLeft: 50
    },
    bio: {
         fontSize: 10,
        color: 'gray',

    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    badge__container: {
        position: 'absolute',
        left: 120,
    },
    badge__text: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#41748d',
        color: 'white',
        padding: 5,
        fontSize: 10,
        width: 22,
        height: 22,
    }
});

export default styles;