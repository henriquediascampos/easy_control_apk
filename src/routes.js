import React from "react";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from "react-native-vector-icons/FontAwesome";

import Login from './pages/login/Login';
import RecoverPassword from './pages/recoverPassword/RecoverPassword';
import UserRegistration from './pages/userRegistration/UserRegistration';
import Home from "./pages/Home";
import Despesas from "./pages/Despesas";
import Settings from "./pages/Settings";
// import About from "./pages/About";

const tabsNavigate =  createAppContainer(createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="home" size={35} color={tintColor} />;
            },
        }
    },
    Despesas: {
        screen: Despesas,
        navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return <Icon name="briefcase" size={35} color={tintColor} />;
            },
        }
    },
    // Conta: {
    //     screen: Despesas,
    //     navigationOptions: {
    //             tabBarIcon: ({ tintColor }) => {
    //                 return <Icon name="trending-up" size={35} color={tintColor} />;
    //         },
    //     }
    // },
    // historico: {
    //     screen: Despesas,
    //     navigationOptions: {
    //             tabBarIcon: ({ tintColor }) => {
    //                 return <Icon name="card" size={35} color={tintColor} />;
    //         },
    //     }
    // },
    Settings: {
        screen: Settings,
        navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return <Icon name="cog" size={35} color={tintColor} />;
            },
        }
    },
    // About
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F5F5F5',
        inactiveTintColor: '#6B52AE',
        labelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        tabStyle: {
            backgroundColor: '#C48EF6',
        },
    }
}));

console.disableYellowBox = true;

export default createAppContainer(
    createSwitchNavigator({
        UserRegistration,
        Login,
        tabsNavigate,
        RecoverPassword,
    }
));

