import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { Link } from '@reach/router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbarWrapper}>
        <ul className={styles.navbar}>
          <Link to="/">#general</Link>
          <Link to="software">#software</Link>
          <Link to="engineering">#engineering</Link>
          <Link to="science">#science</Link>
        </ul>
      </nav>
    );
  }
}
