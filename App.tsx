import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import LoginScreen from './screens/LoginScreen';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './screens/MainScreen'
import { LocalArea } from './screens/LocalArea';
import { Navigator } from './navigation/Navigator';
import CreateTowns from './screens/CreateTowns';
import { ProfilePicture } from './components/profilepicture/ProfilePicture';
import Signup from './screens/Signup';
import { SplashScreen } from './screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  const [image, setImage] = useState(null);
    const [msg, setMsg ] = useState('')
    useEffect(() => {
        (async () => {
            if(Platform.OS !== "web"){
                const libraryResponse = await ImagePicker.requestMediaLibraryPermissionsAsync()
                    if(libraryResponse.status !== 'granted'){
                        alert('Grant permission to library!')
                    }
            }

        })()
    }, [])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
                aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    const sendImage = () => {
      if(!image){
        setMsg('Select Image!')
        return;
      }
      // const results = await axios.post("https://unity-coms.herokuapp.com/api/emergency", msgBody)
    }

  return (
    <NavigationContainer
   
    >
      <Stack.Navigator
      
        screenOptions={{
          headerStyle: {
            backgroundColor: '#367f86',
          },
        }}
      >

    <Stack.Screen name="splash" component={SplashScreen} options={{ title: "Communities" , headerTitleStyle:
      {color: '#ECB22E' , fontSize: 20}, headerLeft: ()=> (
      <View style={{marginLeft: 10}}>
          <Image source={require('./assets/hookd.png')} style={{ width: 25, height: 30}} resizeMode='contain' />
      </View>
      )
    }}/>

    <Stack.Screen name="Signin" component={LoginScreen} options={{ title: "Communities" , headerTitleStyle:
      {color: '#ECB22E' , fontSize: 20}, headerLeft: ()=> (
      <View style={{marginLeft: 10}}>
          <Image source={require('./assets/hookd.png')} style={{ width: 25, height: 30}} resizeMode='contain' />
      </View>
      )
    }}/>

    <Stack.Screen name="Signup" component={Signup} options={{ title: "Communities" , headerTitleStyle:
      {color: '#ECB22E' , fontSize: 20}, headerLeft: ()=> (
      <View style={{marginLeft: 10}}>
          <Image source={require('./assets/hookd.png')} style={{ width: 25, height: 30}} resizeMode='contain' />
      </View>
      )
    }} />

  <Stack.Screen name="navigator" component={Navigator} options={{ title: "Communities" , headerTitleStyle:
      {color: '#ECB22E' , fontSize: 20}, headerLeft: ()=> (
      <View style={{marginLeft: 10}}>
          <Image source={require('./assets/hookd.png')} style={{ width: 25, height: 30}} resizeMode='contain' />
      </View>
      ),
      headerRight: () => (
      <View style={{flexDirection: 'row' , justifyContent: 'space-between' , alignItems: 'center' , width: 70,
          marginRight: 5}}>
          <TouchableOpacity onPress={pickImage}>
              {!image ? (
                <FontAwesome name="user-circle-o" size={22} color="black" />
              ) :
              (
                <ProfilePicture image={image} />
              )}
          </TouchableOpacity>
      </View>
    )
    }}
  />

    <Stack.Screen name="Communities" component={MainScreen} />

    <Stack.Screen name="LocalArea" component={LocalArea} options={({ route }) => ({
        title:  route?.params?.town,
       headerLeft: ()=> (
      <View style={{marginLeft: 10}}>
          <Image source={require('./assets/hookd.png')} style={{ width: 25, height: 30}} resizeMode='contain' />
      </View>
      ),
      })}/>

    <Stack.Screen name="Create Town" component={CreateTowns} />
    </Stack.Navigator>
    </NavigationContainer>
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
