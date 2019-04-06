import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";


export const config  = {
  initialRouteName : "MainPage"
};

const MainPage = {};

export const route = {
  MainPage : {
    screen            : createBottomTabNavigator(MainPage),
    navigationOptions : ({ navigation }) => {
      const currentRoute = navigation.state.routes[navigation.state.index];
      return MainPage[currentRoute.key].navigationOptions({ navigation }); 
    }
  }
};