import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {white, gray, black, blue, lightgray} from './utils/colors'
import DeckStack from './components/DeckStack';
import AddDeck from './Components/AddDeck';
import SelectedDeck from './Components/SelectedDeck';
import AddCard from './Components/AddCard';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Decks: {
    screen: DeckStack,
    navigationOptions:{
      tabBarIcon: ({}) => (<View><Ionicon size={22} style={{}} name={'layers'} /></View>)
    }
  },
    AddDeck: {
      screen: AddCard,
      navigationOptions:{
        tabBarIcon: ({}) => (<View><Ionicon size={22} style={{}} name={'duplicate'} /></View>)
      }
    }
  },
  {
    initialRouteName: 'Decks',
    activeColor: white,
    inactiveColor: gray
  }
)

export default createAppContainer(TabNavigator);