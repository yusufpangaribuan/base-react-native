import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text
}                                   from "react-native";
import PropTypes                    from "prop-types";
import HomePresenter                from "./HomePresenter";
import HomeStyle                    from "./HomeStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";

class HomePage extends Component {
  presenter                 = new HomePresenter(this);

  static navigationOptions  = createNavigationOptions(
    lang("home_page.title"),
    (navigation) => ({
      headerLeft  : <View/>,
      headerRight : <View/>
    })
  );
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View>
        <Text>Content</Text>
      </View>
    );
  }
}

export default Reducer.connect(HomePage, HomePresenter);