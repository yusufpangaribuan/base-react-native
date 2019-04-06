import React                        from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomePage                     from "~/pages/home/HomePage";

export const config  = {
  initialRouteName : "HomePage"
};

const MainPage = {
  HomePage
};

export const route = {
  MainPage : {
    screen            : createBottomTabNavigator(MainPage),
    navigationOptions : ({ navigation }) => {
      const currentRoute = navigation.state.routes[navigation.state.index];
      return MainPage[currentRoute.key].navigationOptions({ navigation }); 
    }
  },
  HomePage
};