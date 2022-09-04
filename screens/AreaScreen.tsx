import { View, Text } from "react-native"
import SafeAreaView from 'react-native-safe-area-view';
import { LocalArea } from '../components/area/LocalArea';

export const AreaScreen = () => {
  return (
    <SafeAreaView>
        <LocalArea />
    </SafeAreaView>
  )
}
