import React, { Component } from 'react';
import styles from './GeneralChatroom.module.scss';
import MessageTile from '../MessageTile';

export default class GeneralChatroom extends Component {
  render() {
    const { getDataFromFirebase, addDataToFirebase, updateDataOnFirebase, deleteDataFromFirebase } = this.props;
    return (
      <div className={styles.generalChatroomWrapper}>
        <h2>#GENERAL CHATROOM</h2>
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
