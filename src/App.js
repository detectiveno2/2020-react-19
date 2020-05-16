import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FollowUserListItem from './components/FollowUserListItem.js';

class App extends Component {
  render() {
    const users = [
      {name: 'phong0129', avatarUrl: 'https://loremflickr.com/48/48'},
      {name: 'phong0129', avatarUrl: 'https://loremflickr.com/48/48'},
      {name: 'phong0129', avatarUrl: 'https://loremflickr.com/48/48'}
    ]
    
    return (
      <div className="App">
        <FollowUserListItem users={users} />
      </div>
    );
  }
}

export default App;
