import _ from "lodash";
import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";
import { AppLoading } from "expo";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Job Application", color: "#77efff" },
  { text: "Use this to get a job", color: "#3ed1e8" },
  { text: "Set your location, then swipe away", color: "#77efff" }
];

export default class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlideComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}
