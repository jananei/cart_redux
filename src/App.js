import React, { Component } from 'react';
import './App.css';
import Shopping from './shopping_page.js';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <header className="App-header">Shopping Cart
          </header>
          <Shopping />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
