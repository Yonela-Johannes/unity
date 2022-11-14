import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons'
import { MainTabParamList } from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AreaScreen } from "../screens/AreaScreen";
import Chat from "../screens/Chat";
import { EmergencyScreen } from "../screens/Emergency";
import FavoriteScreen  from '../screens/FavoriteScreen'

const Tab = createBottomTabNavigator<MainTabParamList>();

export const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chambers"
      screenOptions={{   
        tabBarHideOnKeyboard: true,
         }}
    >
      <Tab.Screen
        component={AreaScreen}
        name="Communities"
        options={{
          headerStyle: {
          backgroundColor: "#367f86"
          },
          tabBarIcon: ({ focused, color: string }) => 
          <MaterialCommunityIcons name="webhook"color={focused ? "#ECB22E" : "#367f86"} size={25} 
          />,
          tabBarLabel: () => null
        }}
        />
          <Tab.Screen
        name="Emergencies"
        component={EmergencyScreen}
        options={{
          headerStyle: {
            backgroundColor: "#367f86"
            },
          tabBarIcon: ({ focused, color: string }) => 
              <MaterialCommunityIcons name="lightbulb-group" size={26} color={focused ? "#ECB22E" : "#367f86"}/>,
          tabBarLabel: () => null
        }} />
      <Tab.Screen
        name="Your Location"
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: "#367f86"
            },
          tabBarIcon: ({ focused, color: string }) => 
              <MaterialIcons name="dynamic-feed" size={26} color={focused ? "#ECB22E" : "#367f86"} />,
          tabBarLabel: () => null
        }} />
              <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerStyle: {
            backgroundColor: "#367f86"
            },
          tabBarIcon: ({ focused, color: string }) => 
              <Fontisto name="favorite" size={26} color={focused ? "#ECB22E" : "#367f86"} />,
          tabBarLabel: () => null
        }} />
    </Tab.Navigator>
  )
}
