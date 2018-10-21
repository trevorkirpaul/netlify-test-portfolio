import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="AppWrapper">
        <div className="TitlePanel">
          <h1>Trevor Kirpaul <span className="lightText desktop">Web Developer</span></h1>
          <h2 className="mobileOnly">Web Developer</h2>
        </div>

        <div className="descriptionPanel">
          <p>I love creating.</p>
          <p>I'm currently focused on React, GraphQL and Node.js</p>
        </div>

        <div className="linksPanel">
        <a
          href="https://github.com/trevorkirpaul"
          target="_blank"
          rel="noopener noreferrer"
        >
        <i className="fab fa-github-square"></i> Personal GitHub
        </a>

        <a
          href="https://twitter.com/trevorkirpaul"
          target="_blank"
          rel="noopener noreferrer"
        >
        <i className="fab fa-twitter-square"></i> Contact Me
        </a>
        </div>
      </div>
    );
  }
}

export default App;
