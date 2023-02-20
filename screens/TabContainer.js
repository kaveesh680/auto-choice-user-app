import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

//screens
import HomeStackScreen from './HomeStack.screen';
import ClaimsScreen from './Claim.screen';
import VehileScreen from './Vehicle.screen';
import ProfileScreen from './Profile.screen';

//Screen names
const homeName = 'HomeStack';
const claimName  = 'Claims';
const vehicleName = 'Vehicles';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function TabContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions = {({route}) => ({
                    headerShown: false,
                    tabBarActiveTintColor: "#154897",
                    tabBarStyle: [
                      {
                        display: "flex"
                      },
                      null
                    ],
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn  = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn===claimName){
                            iconName = focused ? 'document-text' : 'document-text'
                        } else if (rn===vehicleName){
                            iconName = focused ? 'car-sport-outline' : 'car-sport-outline'
                        } 
                        else if (rn === profileName){
                            iconName = focused ? 'person' : 'person'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
                >
                
                <Tab.Screen name={homeName} component= { HomeStackScreen } options={ {title : "Home" , headerTitleAlign:'center' } }/>
                <Tab.Screen name={claimName} component= { ClaimsScreen } options={{ headerTitleAlign:'center' }} />
                <Tab.Screen name={vehicleName} component= { VehileScreen } options={{ headerTitleAlign:'center' }} />
                <Tab.Screen name={profileName} component= { ProfileScreen } options={{ headerTitleAlign:'center' }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}