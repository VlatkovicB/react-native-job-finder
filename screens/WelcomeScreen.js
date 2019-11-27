import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Jobs application", color: "#77efff" },
  { text: "Use this to get a job", color: "#3ed1e8" },
  { text: "Set your location, then swipe away", color: "#77efff" }
];

export default class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

const styles = StyleSheet.create({});
