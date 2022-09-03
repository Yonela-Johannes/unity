import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Navigator } from '../navigation/Navigator'

export const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Navigator />
        </View>
    )
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})