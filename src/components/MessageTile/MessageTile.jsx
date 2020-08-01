import React, { Component } from 'react';
import styles from './MessageTile.module.scss';

export default class MessageTile extends Component {
  render() {
    const { id, name, message, timeStamp, photo } = this.props;
    return (
      <div className={styles.messageTileWrapper}>
        <img src={photo} alt="display picture" />
        <div>
          <p>
            Message ID: <span> {id}</span>
          </p>
          <p>
            Name: <span> {name}</span>
          </p>
          <p>
            Message: <span> {message}</span>
          </p>
        </div>

        {/* <p>Hello World</p> */}
      </div>
    );
  }
}
