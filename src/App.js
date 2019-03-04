import React, { Component } from 'react';
import Album from './components/Album'

class App extends Component {
  state = {
    tracks: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.getTracks();
  }

  getTracks = () => {
  }
  render() {
    return (
      <div>
        <Album data={this.state.data}/>
      </div>
    )
  }
}

export default App;
