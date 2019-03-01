import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/menu/Menu.js';
import ContentMain from './component/content/ContentMain.js';

class App extends Component {
  render() {
    return (
      <div className="_Resume">
        <Menu/>
        <ContentMain/>
      </div>
    );
  }
}

export default App;
