import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Mikey Raptor'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Blogging while making progressive web apps!
        </p>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
