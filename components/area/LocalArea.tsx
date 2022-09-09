import { useEffect, useState } from 'react';
import {View, FlatList} from 'react-native';
import { AreaList } from '../area/AreaList';
import axios from 'axios';
import { Loader } from '../customLoader/Loader';

export const LocalArea = () => {
    const [towns, setTowns] = useState()
    useEffect(() => {
        (async () => {
            const towns = await axios.get(`https://unity-coms.herokuapp.com/api/community`);
            setTowns(towns.data.data);
        })();
    }, [towns])

  return (
        <View>   
            {!towns && <Loader /> }        
            <FlatList 
                data={towns}
                renderItem={({ item }) => 
                <AreaList town={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.community_id}
            />
        </View>  
    )
}
