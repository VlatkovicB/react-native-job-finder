import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Swipe from "../components/Swipe";

class DeckScreen extends Component {
  // Video 123
  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderNoMoreCards={this.noMoreCards}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs };
}

export default connect(mapStateToProps)(DeckScreen);

const styles = StyleSheet.create({});
