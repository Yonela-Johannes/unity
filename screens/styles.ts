import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainFavContainer: {
        flex: 1,
        minHeight: '100%',
    },
    favContainer: {
        flex: 1,
        position: 'relative',
        minHeight: '50%',
        width: "100%",
        justifyContent: 'flex-end',
        paddingBottom: 100,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    favWrapper: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        bottom: 1,
    },
    addIcon: {
        color: '#ECB22E',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 80,
        marginRight: 20,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#367f86',
        zIndex: 10,
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
    },
    bottomNav: {
        position: "absolute",
        height: "100%",
        zIndex: 5,

    }

})

export default styles;