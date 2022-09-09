import { StyleSheet, Dimensions } from "react-native";

const {height}  = Dimensions.get("screen")
const height_logo = height * 0.28;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 140,
        paddingHorizontal: 30,
    },
    logo: {
        width: 100,
        height:70
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
      lottie: {
    width: 100,
    height: 100
  },
      header__text: {
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 5,
        fontSize: 20,
        color: '#367f86',
    },
    subheader__text: {
        // fontWeight: 'bold',
        paddingBottom: 15,
        fontSize: 18,
        color: 'gray',
    },
})