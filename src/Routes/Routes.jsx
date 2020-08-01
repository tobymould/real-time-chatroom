import React, { Component } from 'react';
import { Router } from '@reach/router';
import { firestore } from '../../firebase';

import Home from '../components/Home';
import Navbar from '../components/Navbar';
import SoftwareChatroom from '../components/SoftwareChatroom';

export default class Routes extends Component {
  state = { user: null, firebaseData: null };

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
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar />
        <Router>
          <Home path="/" />
          <SoftwareChatroom path="software" />
        </Router>
      </>
    );
  }
}
