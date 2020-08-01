import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase, { firestore, provider } from '../firebase';

import GeneralChatroom from '../components/GeneralChatroom';
import Navbar from '../components/Navbar';
import SoftwareChatroom from '../components/SoftwareChatroom';
import MessageTile from '../components/MessageTile';

export default class Routes extends Component {
  state = { user: null, messageSubmit: null, message: null, chatroomGeneral: null, chatroomSoftware: null };

  componentDidMount() {
    this.getUser();
    this.getDataFromFirebase();
  }

  // AUTHENTICATION METHODS:
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

  // FIRESTORE METHODS - CRUD:
  getDataFromFirebase = async () => {
    const collectionGeneral = firestore.collection('generalChatroom');
    const snapshotGeneral = await collectionGeneral.get();
    let dataArray = [];
    snapshotGeneral.forEach(doc => {
      const messageID = doc.id;
      dataArray.push([messageID, doc.data()]);
    });
    console.log(dataArray);
    this.setState({ chatroomGeneral: dataArray });
  };

  addDataToFirebase = event => {
    event.preventDefault();
    const { user, message } = this.state;
    const instantiateTime = new Date();
    const now = JSON.stringify(instantiateTime).slice(0, -6).slice(1).split('T').join('_');
    const createdAt = firebase.firestore.Timestamp.fromDate(instantiateTime);
    const userEmail = user.email;
    const userName = user.displayName;
    const submission = { userEmail: userEmail, userName: userName, message: message, createdAt: createdAt };
    console.log(submission);

    firestore
      .collection('generalChatroom')
      .doc(now + userEmail)
      .set(submission)
      .then(snapshot => {})
      .catch(error => {});

    this.getDataFromFirebase();
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

  // OTHER METHODS:
  inputMessageTiles = () => {
    const { chatroomGeneral } = this.state;
    const { user } = this.state;

    if (chatroomGeneral) {
      return chatroomGeneral.map((tileInfo, index) => {
        const id = tileInfo[0];
        const name = tileInfo[1].name;
        const message = tileInfo[1].message;

        // const timeStamp = tileInfo[1].created_at.seconds / 60 / 60 / 24 / 7 / 12 / 10;

        return <MessageTile id={id} name={name} message={message} photo={user.photoURL} key={index} />;
      });
    } else {
      return null;
    }
  };

  messageStateToggle = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { user, message } = this.state;
    const { signIn, signOut, signInOutJsx } = this;
    const { getDataFromFirebase, addDataToFirebase, updateDataOnFirebase, deleteDataFromFirebase } = this;
    const { inputMessageTiles, messageStateToggle } = this;

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar signIn={signIn} signOut={signOut} signInOutJsx={signInOutJsx} />

        <Router>
          <GeneralChatroom path="/" getDataFromFirebase={getDataFromFirebase} addDataToFirebase={addDataToFirebase} updateDataOnFirebase={updateDataOnFirebase} deleteDataFromFirebase={deleteDataFromFirebase} inputMessageTiles={inputMessageTiles} message={message} messageStateToggle={messageStateToggle} />

          <SoftwareChatroom path="software" getDataFromFirebase={getDataFromFirebase} addDataToFirebase={addDataToFirebase} updateDataOnFirebase={updateDataOnFirebase} deleteDataFromFirebase={deleteDataFromFirebase} inputMessageTiles={inputMessageTiles} />
        </Router>
      </>
    );
  }
}
