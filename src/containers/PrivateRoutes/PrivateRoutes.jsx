import React, { Component } from 'react';
import { Router, globalHistory, navigate, Redirect } from '@reach/router';
import firebase from '../../firebase';

export default class PrivateRoutes extends Component {
  state = {};

  componentDidMount() {
    const { user } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        alert('You have to log in first to navigate to this url location');
        // globalHistory.navigate('/');
      } else if (user) {
        // globalHistory.navigate('http://localhost:3000/app');
        return <Redirect to="/app" />;
      }
    });
  }

  render() {
    return <>{this.props.children}</>;
  }
}
