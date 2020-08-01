import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase, { firestore, provider } from '../firebase';

import Home from '../components/Home';
import Navbar from '../components/Navbar';
import SoftwareChatroom from '../components/SoftwareChatroom';

export default class Routes extends Component {
  state = { user: null, firebaseData: null };

  componentDidMount() {
    this.getUser();
  }

  // AUTHENTICATION METHODS
  getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  signInOutJsx = () => {
    const { user } = this.state;
    const { signIn, signOut } = this;
    if (user) {
      return <button onClick={signOut}>Signout</button>;
    } else {
      return <button onClick={signIn}>Signin</button>;
    }
  };

  // FIRESTORE METHODS - CRUD
  getDataFromFirebase = () => {
    firestore
      .collection('chatrooms')
      .doc('Toby')
      .get()
      .then(snapshot => {})
      .catch(error => {});
  };

  addDataToFirebase = something => {
    firestore
      .collection('chatrooms')
      .doc('Toby')
      .set(something)
      .then(snapshot => {})
      .catch(error => {});
  };

  updateDataOnFirebase = something => {
    firestore
      .collection('chatrooms')
      .doc('Toby')
      .update(something)
      .then(snapshot => {})
      .catch(error => {});
  };

  deleteDataFromFirebase = something => {
    firestore
      .collection('chatrooms')
      .doc('Toby')
      .delete(something)
      .then(snapshot => {})
      .catch(error => {});
  };

  render() {
    const { user } = this.state;
    const { signIn, signOut, signInOutJsx } = this;

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar signIn={signIn} signOut={signOut} signInOutJsx={signInOutJsx} />
        <Router>
          <Home path="/" />
          <SoftwareChatroom path="software" />
        </Router>
      </>
    );
  }
}
