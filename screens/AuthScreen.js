import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { connect } from "react-redux";

import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount = () => {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    // For testing
    // AsyncStorage.removeItem("fb_token");
  };

  onAuthComplete = props => {
    if (props.token) {
      this.props.navigation.navigate("map");
    }
  };

  componentWillReceiveProps = nextProps => {
    this.onAuthComplete(nextProps);
  };

  render() {
    return <View></View>;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps, actions)(AuthScreen);
