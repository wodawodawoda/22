import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';


const Navigation = (props, context) => {
  return (
    <div className={styles.navigation}>
      <Link activeClassName={styles['navigation__link--active']} className={styles['navigation__link']} to="/" onlyActiveOnIndex>Home</Link>
      <Link activeClassName={styles['navigation__link--active']} className={styles['navigation__link']} to="/posts" onlyActiveOnIndex>Posts</Link>
      <Link activeClassName={styles['navigation__link--active']} className={styles['navigation__link']} to="/about" onlyActiveOnIndex>About</Link>
      <Link activeClassName={styles['navigation__link--active']} className={styles['navigation__link']} to="/portfolio" onlyActiveOnIndex>Portfolio</Link>
    </div>
  );
};

Navigation.propTypes = {
};

export default Navigation;
