import React, { PropTypes } from 'react';

import './Sidebar.sass';

import FacebookPlugin from '../../../FacebookPlugin/FacebookPlugin';

import FacebookProvider, { Page, EmbeddedPost } from 'react-facebook'

const Sidebar = (props, context) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__plugin">
        <FacebookPlugin />
      </section>
    </aside>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
