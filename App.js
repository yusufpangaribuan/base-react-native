import React                        from "react";
import { Asset, AppLoading, Font }  from "expo";
import Navigator                    from "~/component/Navigator";
import store                        from "~/store";
import { StyleSheet, Text, View }   from "react-native";
import { Provider }                 from "react-redux";

export default class App extends React.Component {

  images = [];
  
  fonts  = {
    "AvenirNext-Bold"     : require("./fonts/AvenirNext-Bold.ttf"),
    "AvenirNext-Medium"   : require("./fonts/AvenirNext-Medium.ttf"),
    "Futura-Bold"         : require("./fonts/Futura-Bold.ttf"),
    "Avenir-Heavy"        : require("./fonts/Avenir-Heavy.ttf")
  };
  
  state  = {
    isReady : false
  };

  loadApp() {
    return Promise.all([
      this.loadImages(),
      this.loadFonts()
    ]);
  }

  loadImages() {
    return this.images.map(image => Asset.fromModule(image).downloadAsync());
  }

  loadFonts() {
    return Font.loadAsync(this.fonts);
  }

  render() {
    const { isReady } = this.state; 
    return (
      isReady ?
        <Provider store={store}>
          <Navigator/>
        </Provider> :
        <AppLoading 
          startAsync={this.loadApp.bind(this)}
          onFinish={() => this.setState({ isReady : true })}
        />
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    alignItems : "center",
    justifyContent : "center"
  }
});

console.disableYellowBox = true;
