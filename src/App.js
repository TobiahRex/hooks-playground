import React, { Component } from 'react';

import Playground from './Playground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="input">
          <Playground />
        </div>
      </div>
    );
  }
}

export default App;
