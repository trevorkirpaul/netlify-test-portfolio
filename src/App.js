import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="WrapperBase">
        <h1>Trevor Kirpaul</h1>

        <div class="BlockWrap"><h3>Description</h3>
        
        <p>Front-end Web Developer</p></div>

        <div class="BlockWrap">
          <h3>Favorites</h3>
          <ul>
          <li>
          React
          </li>
          <li>
          GraphQL
          </li>
          <li>
          Node.js
          </li>
          </ul>
        </div>

        <div class="BlockWrap"><h3>Links</h3>
        <a href="https://github.com/trevorkirpaul">Github</a></div>
      </div>
    );
  }
}

export default App;
