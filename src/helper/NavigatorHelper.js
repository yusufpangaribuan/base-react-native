import React, { Component }         from "react";
import PropTypes                    from "prop-types";
import { 
  Platform,
  View,
  TouchableOpacity,
  Image,
  Text
}                                   from "react-native";
// import { Icon }                     from "react-native-elements";
import { NavigationActions }        from "react-navigation";
import swatch                       from "~/config/swatch";
import { AntDesign }                from "react-native-vector-icons";

const headerTitleStyle = Platform.OS == "android" ? 
  {
    fontFamily        : "Avenir-Heavy",
    fontSize          : 15,
    alignSelf         : "center",
    textAlign         : "center",
    justifyContent    : "center",
    position          : "absolute",
    left              : 0,
    right             : 0
  } : {
    fontFamily        : "Avenir-Heavy",
    fontSize          : 15,
    fontWeight        : "bold"
  };


const headerLeft = navigation => (
  <TouchableOpacity 
    style={defaultHeaderLeftViewStyle}
    activeOpacity={0.85}
    onPress={() => navigation?.goBack()}>
    <AntDesign name="arrowleft" size={25}/>
  </TouchableOpacity>
);

export const createNavigationOptions = (title, getOptions = (navigation) => {}) => ({ navigation }) => ({
  title,
  headerTitleStyle,
  headerStyle : defaultHeaderStyle,
  headerLeft  : headerLeft(navigation),
  headerRight : <View></View>,
  ...getOptions(navigation)
});

export const createCustomNavigationOptions  = (renderHeaderTitle, getOptions = (navigation) => {}) => ({ navigation }) => 
  (
    {
      headerTitle : renderHeaderTitle(navigation),
      headerTitleStyle,
      headerStyle : defaultHeaderStyle,
      headerLeft  : headerLeft(navigation),
      headerRight : <View></View>,
      ...getOptions(navigation)
    }
  );


export const defaultHeaderLeftViewStyle     = {
  height            : 60,
  alignSelf         : "flex-start",
  alignItems        : "center",
  justifyContent    : "center"
};

export const arrowStyle = {
  height : 16,
  width : 16,
  marginLeft : 23
};

export const defaultHeaderStyle             = {
  backgroundColor   : swatch.white,
  borderBottomWidth : 0,
  elevation         : 2,
  shadowColor       : swatch.primaryGray,
  shadowOffset      : {
    width           : 0,
    height          : 2
  },
  shadowRadius      : 2,
  shadowOpacity     : 1,
  height            : 51.5
};

export const defaultBottomTabBarIconStyle = {
  width             : 29,
  height            : 25
};

export const defaultBottomTabBarLabelStyle = {
  fontFamily          : "AvenirNext-Medium",
  fontSize            : 10,
  color               : swatch.quaternaryGray,
  lineHeight          : 14,
  includeFontPadding  : true,
  textAlignVertical   : "center"
};

export const defaultBottomTabBarActiveLabelStyle = {
  ...defaultBottomTabBarLabelStyle,
  color               : swatch.lightPrimaryColor
};

export const createBottomTabBarItem = (options = {
  activeImage   : null,
  inactiveImage : null,
  label         : "" }) => ({
  tabBarIcon    : ({ focused }) => 
    <Image 
      resizeMode="contain"
      style={defaultBottomTabBarIconStyle}
      source={focused ? options.activeImage : options.inactiveImage}/>,
  tabBarLabel   : ({ focused }) => 
    <Text style={focused ? defaultBottomTabBarActiveLabelStyle : defaultBottomTabBarLabelStyle}>
      {options.label}
    </Text>
});