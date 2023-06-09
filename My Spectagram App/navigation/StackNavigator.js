import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator.js";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator =()=>{
    return(
        <Stack.Navigator
        initiateRouteName="Home"
        screenoptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={TabNavigator}/>
        <Stack.Screen name="PostScreen" component={PostScreen}/>     
        </Stack.Navigator>
    )
}