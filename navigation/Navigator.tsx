import { View , Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons'
import { MainTabParamList } from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AreaScreen } from "../screens/AreaScreen";
import Chat from "../screens/Chat";
import { EmergencyScreen } from "../screens/Emergency";
import FavoriteScreen  from '../screens/FavoriteScreen'

const Tab = createBottomTabNavigator<MainTabParamList>();
export const Navigator = () => {
    const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="Chambers"
      screenOptions={{   
          activeTintColor: Colors[colorScheme].background,   
          style: {
          backgroundColor: Colors[colorScheme].tint,
         },
        labelStyle: {
           fontWeight: 'bold',
         }, 
         }}
    >
      <Tab.Screen
        component={AreaScreen}
        name="Areas"
        options={{
        headerStyle: {
            backgroundColor: '#c2c2c2'
          },
          tabBarIcon: ({ color: string }) => 
          <MaterialCommunityIcons name="webhook"color="#367f86" size={25} 
          />,
          tabBarLabel: () => null
        }}
        />
          <Tab.Screen
        name="Emergencies"
        component={EmergencyScreen}
        options={{
          tabBarIcon: ({ color: string }) => 
              <MaterialCommunityIcons name="lightbulb-group" size={24} color="#367f86" />,
          tabBarLabel: () => null
        }} />
      <Tab.Screen
        name="Local News"
        component={Chat}
        options={{
          tabBarIcon: ({ color: string }) => 
              <MaterialIcons name="dynamic-feed" size={24} color="#367f86" />,
          tabBarLabel: () => null
        }} />
              <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color: string }) => 
              <Fontisto name="favorite" size={24} color="#367f86" />,
          tabBarLabel: () => null
        }} />
    </Tab.Navigator>
  )
}
