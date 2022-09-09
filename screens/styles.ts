import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input__container: {
        width: 300,
    },
    button: {
        color: 'white',
        width: 120,
        marginTop: 10,
    },
    header__text: {
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 5,
        fontSize: 20,
        color: '#367f86',
    },
    subheader__text: {
        paddingBottom: 15,
        fontSize: 18,
        color: 'gray',
    },
// SIGN UP CONTAINER_STYLE
    signup__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signup__input__container: {        
        width: 330,
    },
    imageContainer: {
        flexDirection: 'row',
        borderColor: "#367f86",
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        backgroundColor: 'lightGrey',
        alignItems: 'center',
    },
    imageText: {
        color: '#367f86',
        fontSize: 15,
        marginRight: 10,
    },
    logo: {
        width: 100,
        height:70
    },
    msg: {
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        fontWeight: 'bold'
    },
    input_subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        paddingVertical: 10,
    },
    bottom_container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default styles;