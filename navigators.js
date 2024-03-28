import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import  FontAwesome  from 'react-native-vector-icons/FontAwesome'

import Home from './src/screens/Home.js'
import Pants from './src/screens/Pants'
import Dress from './src/screens/Dress'
import LongSleeve from './src/screens/LongSleeve'
import CamisaLonga from './src/screens/CamisaLonga'
import CamisaCurta from './src/screens/CamisaCurta'
import Jacket from './src/screens/Jacket'
import About from './src/screens/About.js'
import Metodos from './src/screens/Metodos.js'

const Stack = createStackNavigator()
const TabNavigator = createBottomTabNavigator()


export function HomeScreen(){
  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={{tabBarActiveTintColor:"black"}}>
        <TabNavigator.Screen name="Home" options={{  tabBarIcon: ()=>(<FontAwesome size={30} name={"home"} />) }} component={Stacks}/>
        <TabNavigator.Screen name="Sobre" options={{ tabBarIcon: ()=>(<FontAwesome size={30} name={"book"}/>) }} component={About}/>
        <TabNavigator.Screen options={{ tabBarIcon: ()=>(<FontAwesome size={30} name={"money"}/>)}} name="Métodos de pagamento" component={Metodos}/>
      </TabNavigator.Navigator>
    </NavigationContainer>
    
  )
}


function Stacks() {
  return(
      
        <Stack.Navigator>
          <Stack.Screen name="Página inicial"  options={{ title:'', headerTransparent: true, headerShown: false}} component={Home}/>
          <Stack.Screen name="Pants" component={Pants}/>
          <Stack.Screen name="Dress" component={Dress}/>
          <Stack.Screen name="Long Sleeve" component={LongSleeve}/>
          <Stack.Screen name="Camisa Longa" component={CamisaLonga}/>
          <Stack.Screen name="Black t-shirt" component={CamisaCurta}/>
          <Stack.Screen name="Jacket" component={Jacket}/>
        </Stack.Navigator>
      
      )
}
  
    


