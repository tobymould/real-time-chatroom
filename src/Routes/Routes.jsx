import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

export default class Routes extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar />
        <Router>
          <Home path="/" />
        </Router>
      </>
    );
  }
}
