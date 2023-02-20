import React, {useContext, useEffect, useState} from "react";
import SignInScreen from "./screens/SignIn.screen";
import { AuthContext } from "./context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import  TabContainer from "./screens/TabContainer";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {addClaim} from "./services/service";

const Stack = createStackNavigator();

export const AppStack = () => {

    const { isLoading, userToken } = useContext(AuthContext);

    const [isConnected, setIsConnected] = useState(true);
    // NetInfo.fetch().then(() => {
    //     setIsConnected(true);
    // });
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    },[]);

    useEffect(() => {
        (async () => {
            if (isConnected) {
                const data = await AsyncStorage.getItem('claimData');
                if (data) {
                    await AsyncStorage.removeItem('claimData');
                    await addClaim(JSON.parse(data));
                }
            }
        })();
    },[isConnected]);

    if (isLoading) {
        return (
            <View style={{flex:1, justifyContent: 'space-around', flexDirection: 'row', padding:10}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <>
            {userToken === null ?
                (   
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown:false}} >
                            <Stack.Screen name="SignIn" component={SignInScreen}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                ) :
                
                    <TabContainer />
                
                } 
        </>
    )
}