import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <span className='d-block d-lg-none'>{this.props.title}</span>
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
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger active' href='#about'>
                {this.props.menuTitles[0]}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#experience'>
                {this.props.menuTitles[1]}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#education'>
                {this.props.menuTitles[2]}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#skills'>
                {this.props.menuTitles[3]}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#interests'>
                {this.props.menuTitles[4]}
              </a>
            </li>
            {/* <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#awards'>
                {this.props.menuTitles[5]}
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.defaultProps = {
  title: 'Duy NGUYEN',
  menuTitles: [
    'About',
    'Experience',
    'Education',
    'Skills',
    'Interests',
    'Awards'
  ]
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  menuTitles: PropTypes.array
};

export default Menu;
