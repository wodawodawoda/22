import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Navigation from '../Navigation/Navigation';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <div key={lang} onClick={() => props.switchLanguage(lang)}
                 className={lang === props.intl.locale ? `${styles['language-switcher__language']} ${styles.selected}` : `${styles['language-switcher__language']}`}>{lang}</div>
  );

  return (
    <div className={styles.header}>
      <div className={styles['top-bar']}>
        <Navigation />
        <div className={styles['language-switcher']}>
          <FormattedMessage id="switchLanguage" />
            {languageNodes}
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        {
          context.router.isActive('/posts', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
