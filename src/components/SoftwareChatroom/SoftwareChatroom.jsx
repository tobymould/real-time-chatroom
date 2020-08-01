import React, { Component } from 'react';
import styles from './SoftwareChatroom.module.scss';
import MessageTile from '../MessageTile';

export default class SoftwareChatroom extends Component {
  render() {
    return (
      <div className={styles.homeWrapper}>
        <h2>#SOFTWARE CHATROOM</h2>
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
