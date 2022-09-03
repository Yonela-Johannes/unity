import {View, FlatList} from 'react-native';
import town from '../../data/towns'
import { AreaList } from '../area/AreaList'

export const LocalArea = () => {
  return (
        <View>            
            <FlatList 
                data={town}
                renderItem={({ item }) => 
                <AreaList name={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
            />
        </View>  
  )
}
