import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import './FacebookPlugin.sass';

class FacebookPlugin extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      error: false,
    };
  }
  componentWillMount() {
    fetch('http://localhost:8000/facebook')
      .then(res => res.json())
      .then(myJson => this.setState({
        posts: myJson.data,
        error: false,
      }))
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  renderPost = () => {
    if (this.state.error) return <span>Error (info in console)</span>;
    if (!this.state.posts) return <span>loading</span>;
    this.state.posts.map(post => {
      return (
        <div key={post.id} className="facebook-plugin__post">
          <img className="facebook-plugin__img" src={post.picture} role="presentation"/>
          <p className="facebook-plugin__message">{post.message}</p>
          <a className="facebook-plugin__link" href={`https://facebook.com/${post.id}`}>See on facebook</a>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="facebook-plugin">
        <h2 className="facebook-plugin__header"><a href={"http://www.facebook.com"}>Facebook</a></h2>
        {this.renderPost()}
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

FacebookPlugin.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookPlugin);
