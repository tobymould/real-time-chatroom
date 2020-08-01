import React, { Component } from 'react';
import styles from './MessageTile.module.scss';

export default class MessageTile extends Component {
  render() {
    const { name, message, timeStamp, photo } = this.props;
    return (
      <div className={styles.messageTileWrapper}>
        <img src={photo} alt="display picture" />
        <div>
          <p>{name}</p>
          <p>
            Message: <span> {message}</span>
          </p>
        </div>
      </div>
    );
  }
}
