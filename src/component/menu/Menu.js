import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{this.props.title}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="Image" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">{this.props.menuTitles[0]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">{this.props.menuTitles[1]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">{this.props.menuTitles[2]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">{this.props.menuTitles[3]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">{this.props.menuTitles[4]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">{this.props.menuTitles[5]}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.defaultProps = {
  title: 'Duy NGUYEN',
  menuTitles: ['About', 'Experience', 'Education', 'Skills', 'Interests', 'Awards'],
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  menuTitles: PropTypes.array
};

export default Menu;