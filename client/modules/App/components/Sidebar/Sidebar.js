import React, { PropTypes } from 'react';

import styles from './Sidebar.css';

const Sidebar = (props, context) => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles['header']}>
        <h2 className={styles['header__name']}>Sidebar</h2>
      </header>
    </aside>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
