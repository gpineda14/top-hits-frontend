import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HitsList from './components/HitsList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HitsList />
      </div>
    )
  }
}

export default App;
