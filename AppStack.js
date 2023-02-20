import React, {useContext} from "react";
import SignInScreen from "./screens/SignIn.screen";
import { AuthContext } from "./context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import  TabContainer from "./screens/TabContainer";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const AppStack = () => {

    const { isLoading, userToken } = useContext(AuthContext);

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