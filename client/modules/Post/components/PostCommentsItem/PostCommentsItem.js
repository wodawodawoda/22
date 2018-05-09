import React, { PropTypes } from 'react';

// Import styles
import styles from './PostCommentsItem.css';

const PostCommentsItem = (props, context) => {
  return (
    <div className={styles['comment-item']}>
      <span className={styles['comment-item__user']}>{props.comment.user}</span>
      <p className={styles['comment-item__content']}>{props.comment.content}</p>
      <span className={styles['comment-item__date']}>{props.comment.dateAdded}</span>
    </div>
  );
};

PostCommentsItem.propTypes = {
};

export default PostCommentsItem;
