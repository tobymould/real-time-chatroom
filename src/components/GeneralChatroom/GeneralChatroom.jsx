import React, { Component } from 'react';
import styles from './GeneralChatroom.module.scss';
import MessageTile from '../MessageTile';

export default class GeneralChatroom extends Component {
  render() {
    const { getDataFromFirebase, addDataToFirebase, updateDataOnFirebase, deleteDataFromFirebase, inputMessageTiles } = this.props;
    const { messageStateToggle } = this.props;
    return (
      <div className={styles.generalChatroomWrapper}>
        <h2>#GENERAL CHATROOM</h2>
        <div className={styles.messageBoard}>{inputMessageTiles()}</div>

        <form onSubmit={addDataToFirebase}>
          <label>
            <p>Your Message:</p>
            <input type="text" placeholder="Your message..." onInput={messageStateToggle} />
            <input type="submit" value="send" />
          </label>
        </form>
        {/* <form onSubmit={addDataToFirebase}></form>
          <label>
            <p>Update Display Name:</p>
            <input type="text" placeholder="Update display name..." />
            <input type="submit" value="update" />
          </label>
        </form> */}
      </div>
    );
  }
}
