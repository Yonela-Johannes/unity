import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './screens/MainScreen'
import { LocalArea } from './screens/LocalArea';
import { Navigator } from './navigation/Navigator';
import { ProfilePicture } from './components/profilepicture/ProfilePicture';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   
        screenOptions={{
          headerStyle: {
            backgroundColor: '#367f86',
          },
        }}
      >
        


    <Stack.Screen name="Signin" component={LoginScreen} />
    {/* <Stack.Screen name="Signup" component={Signup} /> */}
    {/* <Stack.Screen name="Communities" component={MainScreen} />
            <Stack.Screen name="LocalArea" component={LocalArea} options={({ route }) => ({
        headerTitle: route.params.name
      })}  />
          <Stack.Screen name="Signin" component={LoginScreen} />
            <Stack.Screen name="Signin" component={LocalArea} options={({ route }) => ({
      })}  />
      <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Signin" component={LocalArea} options={({ route }) => ({
      })}  /> */}
    </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <LoginScreen />
    // </View>
    // <View>
    //   <StatusBar style="auto" />
    //   <Signup />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
