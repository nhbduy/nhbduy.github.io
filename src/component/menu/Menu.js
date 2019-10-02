import React, { Component } from 'react';

import data from './data';

import './Menu.css';

const cn = require('classnames');

const toggleActiveLink = () => {
  // Get the container element
  const btnContainer = document.getElementById('navbarSupportedContent');

  // Get all buttons with class="btn" inside the container
  const links = btnContainer.getElementsByClassName('nav-link');

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      const current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }
};

const setActivePageTop = () => {
  const profile = document.getElementById('navbar-brand');
  profile.addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    const about = document.getElementsByClassName('nav-link')[0];
    about.className += ' active';
  });
};

const toggleMenu = () => {
  const menu = document.getElementById('navbarSupportedContent');
  menu.classList.toggle('collapse');
};

class Menu extends Component {
  componentDidMount() {
    toggleActiveLink();
    setActivePageTop();
  }

  render() {
    return (
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
        id='sideNav'>
        <a
          id='navbar-brand'
          className='navbar-brand js-scroll-trigger'
          href='#page-top'>
          <span className='d-block d-lg-none'>{data.title}</span>
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-profile rounded-circle mx-auto mb-2'
              src='img/profile.jpeg'
              alt='profile'
            />
          </span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => toggleMenu()}>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            {data.list.map((item, index) => (
              <li key={item.name} className='nav-item'>
                <a
                  className={cn([
                    'nav-link js-scroll-trigger',
                    index === 0 ? ' active' : ''
                  ])}
                  href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
