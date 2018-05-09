import React, { PropTypes, Component } from 'react';
import PostCommentsItem from '../PostCommentsItem/PostCommentsItem';

import styles from './PostComments.css';

class PostComments extends Component {
  handlePostComment = (e) => {
    e.preventDefault();
    const wzor = { comments: [...this.props.comments,
      {
        content: e.target[1].value,
        user: e.target[0].value,
      },
    ] };
    this.props.handleEditPost(wzor);
  };

  render() {
    return (
      <div className={styles['post-comments']}>
        <form className={styles['post-comments__form']} onSubmit={e => this.handlePostComment(e)}>
          <input className={styles['post-comments__name']} type="text" placeholder="Name" />
          <input className={styles['post-comments__content']} placeholder="Write comment" name="content" id="commentContent" />
          <button className={styles['post-comments__btn']} type="submit">Add comment</button>
        </form>
        {this.props.comments.map((comment, idx) => (
          <PostCommentsItem key={idx} comment={comment} />
        ))}
      </div>
    );
  }
}

PostComments.propTypes = {
};

export default PostComments;
