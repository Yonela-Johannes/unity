import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import { Favorites } from '../components/favorite/Favorites';

function FavoriteScreen({ navigation }) {

    return (
        <View>
            <Favorites/>
        </View>
    )
}

export default Favorites