import React, { Component } from 'react';

import { throttleFunc } from '../../functions';
import data from './data';

import './Menu.css';

// const toggleActiveLink = () => {
//   // Get all buttons with class="btn" inside the container
//   const links = document.querySelectorAll('.nav-link');

//   // Loop through the buttons and add the active class to the current/clicked button
//   for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function() {
//       const current = document.getElementsByClassName('active');
//       current[0].className = current[0].className.replace(' active', '');
//       this.className += ' active';
//     });
//   }
// };

const setActivePageTop = () => {
  const profile = document.getElementById('navbar-brand');
  profile.addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    const about = document.querySelectorAll('.nav-link')[0];
    about.className += ' active';
  });
};

const toggleMenu = () => {
  const menu = document.getElementById('navbarSupportedContent');
  menu.classList.toggle('collapse');
};

const setActiveMenuWhenScrolling = () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // function detectScrollDirection() {
  //   let lastScrollTop = 0;
  //   const st = window.pageYOffset || document.documentElement.scrollTop;
  //   if (st > lastScrollTop) {
  //     // downscroll code
  //   } else {
  //     // upscroll code
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }

  function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY < sections[index].offsetTop - 50) {}
    links.forEach(link => link.classList.remove('active'));
    links[index].classList.add('active');
  }
  // // run first time to set active the first menu
  changeLinkState();

  window.addEventListener('scroll', throttleFunc(changeLinkState, 100));
};

class Menu extends Component {
  componentDidMount() {
    // toggleActiveLink();
    setActivePageTop();
    setActiveMenuWhenScrolling();
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
            {data.list.map(item => (
              <li key={item.name} className='nav-item'>
                <a className='nav-link js-scroll-trigger' href={item.href}>
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
