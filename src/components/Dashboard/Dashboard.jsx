import React, { Component } from 'react';
import styles from './Dashboard.module.scss';
import { Link } from '@reach/router';

import Navbar from '../Navbar';

export default class Dashboard extends Component {
  render() {
    const { signIn, signOut, signInOutJsx } = this.props;
    return (
      <div className={styles.dashboardWrapper}>
        <h1 style={{ textAlign: 'center' }}>Real-Time Chatroom</h1>
        <h3 style={{ textAlign: 'center' }}>Choose a Chatroom:</h3>
        <Navbar signIn={signIn} signOut={signOut} signInOutJsx={signInOutJsx} />
      </div>
    );
  }
}
