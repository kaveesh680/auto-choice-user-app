import React from "react";
import { NavigationContainer } from "@react-navigation/native";
 import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./context/AuthContext";
import { AppStack } from "./AppStack";

function App(){

    return (
        <NativeBaseProvider>
            <AuthProvider>
                <AppStack />
            </AuthProvider>
        </NativeBaseProvider>
    )
}

export default () => {
    return (
        <App/> 
    );
}

