import React, { Component, PropTypes } from 'react';

import './GithubPlugin.sass';

class GithubPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: [],
      repo: [],
    };
  }
  componentWillMount() {
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}/commits`)
      .then(res => res.json())
      .then(commits => this.setState({commits}));
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}`)
      .then(res => res.json())
      .then(repo => this.setState({repo}))
  }

  renderDescription = () => (
    <div className="github-plugin__header">
      <h2><a href={this.state.repo.html_url}>{this.state.repo.name}</a></h2>
      <p>{this.state.repo.description}</p>
    </div>
  );

  renderCommits = () => (
    <div className="github-plugin__commits">
      {this.state.commits.map((commit, idx) => {
        if (idx > 4) return null;
        return(
          <div key={commit.sha}>
            <p className="github-plugin__commit">{commit.commit.message}</p>;
            <span className="github-plugin__date">{commit.commit.author.date}</span>
          </div>
        )
      })}
    </div>
  );

  render() {
    return (
      <div className="github-plugin">
        <h2 className="github-plugin__name"><a href="http://www.github.com">GitHub</a></h2>
        <div className="github-plugin__repo">
          {this.state.repo ? this.renderDescription() : 'loading'}
          {this.state.repo ? this.renderCommits() : 'loading'}
        </div>
      </div>
    );
  }
}

GithubPlugin.propTypes = {
};

export default GithubPlugin;
