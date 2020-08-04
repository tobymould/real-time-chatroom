import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { Link } from '@reach/router';

export default class Navbar extends Component {
  render() {
    const { signInOutJsx } = this.props;
    return (
      <nav className={styles.navbarWrapper}>
        <ul className={styles.navbar}>
          <Link to="app">#general</Link>
          <Link to="app/software">#software</Link>
          <Link to="app/engineering">#engineering</Link>
          <Link to="app/science">#science</Link>
        </ul>
        {signInOutJsx()}
      </nav>
    );
  }
}
