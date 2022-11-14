import React, {useState, useEffect, useCallback, useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import styles from '../../screens/styles'
import { KeyboardAvoidingView, Platform  } from 'react-native';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import feed from '../../data/feed'
import { FavoriteList } from './FavoriteList';
import { Feather, AntDesign } from '@expo/vector-icons';

import { Loader } from '../customLoader/Loader';
import { CustomButton } from '../../components/customButton/CustomButton';
import axios from 'axios';

export type MainPops = {
    post: string,
}

export const Favorites = (props: MainPops) => {
  const [open, setOpen] = useState(false)
  const navigation = useNavigation()
  const [loading, setLoading ] = useState(false)
  const [townName, setTownName] = useState('');
  const [msg, setMsg] = useState('');

    const createTown = async () => {
      setLoading(true)
      setMsg('')
      if(!townName){
          setMsg('Enter valid town name!')
          setLoading(false)
      }else if(townName.length < 4){
          setMsg('Town must be more than 4 characters')
          setLoading(false)
      }
      else{
            setLoading(true)
          const town =  {
              guildName: townName.trim(),
          }
          const results = await axios.post("https://unity-coms.herokuapp.com/api/community", town)
          setMsg(results.data.data)
          if(results.data.data == 'Guild created successfully!'){
              setOpen(!open)
              setTownName('')
              navigation.navigate("Favorites")
          }
      }
  }

  return (
      <View style={styles.mainFavContainer}>
        {loading && <Loader />}       
            <FlatList 
                data={feed}
                renderItem={({ item }) => 
                <FavoriteList name={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                />
                {open && (
                  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.favContainer}>
                    <View style={styles.favWrapper}>
                        <Text style={styles.header__text}>Create New Town</Text>
                        <View style={styles.input__container}>
                            <Input
                                placeholder="Your Town Name"
                                type={'text'} value={townName}
                                onChangeText={(text) => setTownName(text)} />
                        </View>
                        <Text style={styles.msg}>{msg}</Text>
                        <CustomButton onPress={createTown} text='Create Town' type='primary' color="primary" />
                    </View>
                  </KeyboardAvoidingView>
                )}
                <TouchableOpacity>
                    <View style={styles.addIcon}>
                      {!open ? (
                        <Feather name="edit" onPress={() => setOpen(!open)} size={22} color="#ECB22E" />

                      ):(
                        <AntDesign name="close" onPress={() => setOpen(!open)} size={22} color="#ECB22E" />
                      )}
                    </View>
                </TouchableOpacity>
        </View>
  )
}
