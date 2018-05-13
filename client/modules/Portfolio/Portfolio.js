import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import components
import GithubItem from '../GithubPlugin/GithubItem'

// Import Style
import './Portfolio.sass';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <GithubItem user="wodawodawoda" repo="22" />
        <GithubItem user="wodawodawoda" repo="21" />
        <GithubItem user="wodawodawoda" repo="Investment-reports" />
        <GithubItem user="wodawodawoda" repo="Sudoku" />
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

Portfolio.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
