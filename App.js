import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";

class App extends React.Component {
  render() {
    const MainNavigator = createAppContainer(
      createMaterialBottomTabNavigator(
        {
          welcome: { screen: WelcomeScreen },
          auth: { screen: AuthScreen },
          main: {
            screen: createMaterialBottomTabNavigator({
              map: { screen: MapScreen },
              deck: { screen: DeckScreen },
              review: {
                screen: createStackNavigator({
                  review: { screen: ReviewScreen },
                  settings: { screen: SettingsScreen }
                })
              }
            })
          }
        },
        {
          initialRouteName: "welcome",
          activeColor: "#fff",
          inactiveColor: "#5ce3b4",
          barStyle: { backgroundColor: "#0f04eb" }
        }
      )
    );

    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
