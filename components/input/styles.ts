import { StyleSheet } from "react-native"
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    root: {
        backgroundColor: '#367f86'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#dfddd6',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        marginLeft: 10,
        flex: 1,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    recordingButtonContainer: {
        backgroundColor: 'red',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, 
        width: 100, 
        borderRadius: 15
    },
    audioMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    sendAudioContainer: {
        marginRight: 10,
        flex: 1,
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "stretch",
        borderWidth: 1,
        borderColor: "#ECB22E",
        borderRadius: 10
    },
    audioProgressBG: {
        // position: 'relative',
        margin: 10,
        height: 3,
        flex: 1,
        backgroundColor: "#ECB22E",
        borderRadius: 10,
        position: 'relative',
    },
    audioProgressFG: {
        width: 10,
        height: 10,
        backgroundColor: "#49274b",
        borderRadius: 10,
        position: 'absolute',
        top: -3,
    }
})

export default styles;