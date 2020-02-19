import React from 'react';
import './App.css';
import Menu from './component/menu/Menu.js';
import Content from './component/content/Content';

const App = () => {
  return (
    <div className='_Resume'>
      <Menu />
      <Content />
    </div>
  );
};

export default App;
