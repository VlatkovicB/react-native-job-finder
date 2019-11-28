import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import * as actions from "../actions";

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate("deck");
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={styles.notLoaded}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          style={styles.mapView}
          onRegionChange={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Set location"
            raised
            buttonStyle={styles.button}
            icon={{ name: "search", color: "#fff" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}
export default connect(null, actions)(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    flex: 1
  },
  notLoaded: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 100,
    right: 100,
    height: 50
  },
  button: {
    height: "100%"
  }
});
