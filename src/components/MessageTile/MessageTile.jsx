import React, { Component } from 'react';
import styles from './MessageTile.module.scss';

export default class MessageTile extends Component {
  render() {
    return (
      <div className={styles.messageTileWrapper}>
        <p>Hello World</p>
      </div>
    );
  }
}
