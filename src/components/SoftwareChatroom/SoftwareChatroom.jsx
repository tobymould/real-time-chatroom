import React, { Component } from 'react';
import styles from './SoftwareChatroom.module.scss';
import MessageTile from '../MessageTile';

export default class SoftwareChatroom extends Component {
  render() {
    const { getDataFromFirebase, addDataToFirebase, updateDataOnFirebase, deleteDataFromFirebase, inputMessageTiles } = this.props;
    const { messageStateToggle, chatroomSetState, room } = this.props;

    return (
      <div className={styles.softwareChatroomWrapper}>
        <h2 className={styles.softwareChatroom}>#SOFTWARE CHATROOM</h2>
        <div className={styles.messageBoard}>{inputMessageTiles()}</div>

        <form onSubmit={addDataToFirebase}>
          <label>
            {/* <p>Your Message:</p> */}
            <input type="text" placeholder="Your message..." onInput={messageStateToggle} />
            <input type="submit" value="send" />
          </label>
        </form>
        {room !== 'softwareChatroom' ? chatroomSetState('softwareChatroom') : null}
      </div>
    );
  }
}
