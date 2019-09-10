import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Login from './pages/Login';
import Home from "./pages/Home";
import Despesas from "./pages/Despesas";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Icon from "./pages/components/Icon";
import iconHome from "./assets/home.svg";

const tabsNavigate =  createAppContainer(createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="md-home" size={25} color={tintColor} />;
                // return (
                //     <View style={{color: "#f5f5f5"}}>
                //         <Image source={iconHome} />
                //     </View>
                // )
            },
        }
    },
    Despesas,
    Settings,
    // About
},{
    tabBarOptions: {
        showIcon: true ,
        showLabel: false,
        activeTintColor: '#c48ef6',
        inactiveTintColor: '#999',
        // labelStyle: {
        //     fontSize: 18,
        //     fontWeight: 'bold',
        // },
        // tabStyle: {
        //     // padding: 10,
        //     backgroundColor: '#c48ef6',
        // },
        // style: {
        //     textAlignVertical: 'center',
        //     alignItems: 'center',
        //     alignSelf: "center",
        //     justifyContent: 'center',
        // },
    }
}));

console.disableYellowBox = true;

export default createAppContainer(
    createSwitchNavigator({
        tabsNavigate,
        Login,
    }
));

