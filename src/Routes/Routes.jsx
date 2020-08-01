import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase, { firestore, provider } from '../firebase';

import GeneralChatroom from '../components/GeneralChatroom';
import Navbar from '../components/Navbar';
import SoftwareChatroom from '../components/SoftwareChatroom';

export default class Routes extends Component {
  state = { user: null, chatroomGeneral: null, chatroomSoftware: null };

  componentDidMount() {
    this.getUser();
    this.getDataFromFirebase();
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
  getDataFromFirebase = async () => {
    const collectionGeneral = firestore.collection('general');
    const snapshotGeneral = await collectionGeneral.get();
    let dataArray = [];
    snapshotGeneral.forEach(doc => {
      const hello = doc.id;
      dataArray.push({
        [hello]: doc.data()
      });
    });

    console.log(dataArray);

    this.setState({ chatroomGeneral: dataArray });
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
    const { getDataFromFirebase, addDataToFirebase, updateDataOnFirebase, deleteDataFromFirebase } = this;

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar signIn={signIn} signOut={signOut} signInOutJsx={signInOutJsx} />

        <Router>
          <GeneralChatroom path="/" getDataFromFirebase={getDataFromFirebase} addDataToFirebase={addDataToFirebase} updateDataOnFirebase={updateDataOnFirebase} deleteDataFromFirebase={deleteDataFromFirebase} />

          <SoftwareChatroom path="software" getDataFromFirebase={getDataFromFirebase} addDataToFirebase={addDataToFirebase} updateDataOnFirebase={updateDataOnFirebase} deleteDataFromFirebase={deleteDataFromFirebase} />
        </Router>
      </>
    );
  }
}
