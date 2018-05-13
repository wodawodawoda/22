import React, { PropTypes } from 'react';

import './Sidebar.sass';

import FacebookPlugin from '../../../FacebookPlugin/FacebookPlugin';
import GithubPlugin from '../../../GithubPlugin/GithubPlugin'

import FacebookProvider, { Page, EmbeddedPost } from 'react-facebook'

const Sidebar = (props, context) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__plugin">
        <FacebookPlugin />
      </section>
      <section className="sidebar__plugin">
        <GithubPlugin user="wodawodawoda" repo="22" />
      </section>
    </aside>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
