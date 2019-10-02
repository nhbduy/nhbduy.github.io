import React, { Component } from 'react';
import './App.css';
import Menu from './component/menu/Menu.js';
import Content from './component/content/Content';

class App extends Component {
  render() {
    return (
      <div className='_Resume'>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
