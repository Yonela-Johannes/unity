import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 8,
        // overflow: 'hidden',
    },

    leftContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
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
        fontSize: 15,
        color: '#49274b',
        marginLeft: 50
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