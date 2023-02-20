import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './Home.screen';
import NewClaimSCreen from './NewClaim.screen';
import ViewClaim from './ViewClaim.screen';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}  />             
    <HomeStack.Screen name="New_Claim" component={NewClaimSCreen} />
    <HomeStack.Screen name="View_Claim" component={ViewClaim} />
   </HomeStack.Navigator>
  );
}