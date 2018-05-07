import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          A accusantium aliquid aperiam aspernatur aut consequatur
          esse est explicabo, facilis fugit illum ipsa,
          magni obcaecati optio provident quaerat qui,
          quibusdam quisquam reiciendis tempora totam ullam vel vitae.
          Adipisci alias, deleniti dicta illo ipsa omnis
          placeat quam recusandae soluta voluptates? Minus, voluptate.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
