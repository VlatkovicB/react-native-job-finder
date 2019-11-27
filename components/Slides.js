import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  };

  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          title="Forward"
        //   raised
          onPress={this.props.onComplete}
        />
      );
    }
  };

  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideText: {
    fontSize: 30,
    textAlign: "center",
    width: WIDTH * 0.8,
    color: "#fff"
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH
  },
  buttonStyle: {
    backgroundColor: "#0377b5",
    marginTop: 15
  }
});
