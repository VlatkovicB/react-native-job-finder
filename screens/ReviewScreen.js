import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { Button } from "react-native-elements";

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerStyle: { marginTop: Platform.OS === "android" ? 24 : 0 },
      headerRight: () => (
        <Button
          title="Settings"
          onPress={() => navigation.navigate("settings")}
          type="clear"
          raised={true}
          titleStyle={{ color: "#6518F4" }}
        />
      )
    };
  };

  render() {
    return (
      <View>
        <Text> Review Screen </Text>
        <Text> Review Screen </Text>
        <Text> Review Screen </Text>
        <Text> Review Screen </Text>
        <Text> Review Screen </Text>
        <Text> Review Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
