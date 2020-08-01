import React, { Component } from 'react';
import styles from './Home.module.scss';
import MessageTile from '../MessageTile';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.homeWrapper}>
        <div className={styles.messageBoard}>
          <MessageTile />
          <MessageTile />
          <MessageTile />
        </div>
        <form>
          <label>
            <p>Your Message:</p>
            <input type="text" placeholder="Your message..." />
            <input type="submit" value="send" />
          </label>
          <label>
            <p>Update Display Name:</p>
            <input type="text" placeholder="Update display name..." />
            <input type="submit" value="update" />
          </label>
        </form>
      </div>
    );
  }
}
