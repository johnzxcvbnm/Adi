import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import HelloAgain from './components/HelloAgain.js';
import Open from './components/tea.js'

class App extends Component {
  constructor(props) {
    
  }
  render() {
    return (
      <Open open={true} />
    );
  }
}

export default App;
