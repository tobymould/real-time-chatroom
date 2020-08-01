import React, { Component } from 'react';
import styles from './MessageTile.module.scss';

export default class MessageTile extends Component {
  render() {
    const { id, name, message, timeStamp } = this.props;
    return (
      <div className={styles.messageTileWrapper}>
        <p>
          Message ID: <span> {id}</span>
        </p>
        <p>
          Name: <span> {name}</span>
        </p>
        <p>
          Message: <span> {message}</span>
        </p>

        {/* <p>Hello World</p> */}
      </div>
    );
  }
}
